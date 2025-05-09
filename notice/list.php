<?
session_start();
@extract($_POST);
@extract($_GET);
@extract($_SESSION);

$table = "notice";	// sql문에서 table명을 변수로 처리
?>
<!DOCTYPE html>
<html lang="ko">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>보도자료</title>
	<link
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
		rel="stylesheet" />
	<link rel="stylesheet" href="../common/css/common_sub.css" />
	<link rel="stylesheet" href="../common/css/aos.css" />
	<link rel="stylesheet" href="../common/css/common.css">
	<link rel="stylesheet" href="./css/greet.css">
	<link rel="stylesheet" href="./css/notice.css">
</head>
<?
include "../lib/dbconn.php";


if (!$scale)
	$scale = 4;			// 한 화면에 표시되는 글 수


if ($mode == "search") {
	if (!$search) {
		echo ("
				<script>
				 window.alert('검색할 단어를 입력해 주세요!');
			     history.go(-1);
				</script>
			");
		exit;
	}

	$sql = "select * from $table where $find like '%$search%' order by num desc";
} else {
	$sql = "select * from $table order by num desc";
}

$result = mysqli_query($connect, $sql);

$total_record = mysqli_num_rows($result); // 전체 글 수

// 전체 페이지 수($total_page) 계산 
if ($total_record % $scale == 0)
	$total_page = floor($total_record / $scale);
else
	$total_page = floor($total_record / $scale) + 1;

if (!$page)                 // 페이지번호($page)가 0 일 때
	$page = 1;              // 페이지 번호를 1로 초기화

// 표시할 페이지($page)에 따라 $start 계산  
$start = ($page - 1) * $scale;
$number = $total_record - $start;
?>

<body>
	<div class="skipNav">
		<a href="#content">본문 바로가기</a>
		<a href="#gnb">글로벌 네비게이션 바로가기</a>
	</div>

	<div class="wrap">
		<? include '../common/sub_header.html' ?>

		<div id="mainVisual">
			<img src="./images/content1/sub_visual01.jpg" alt="" />
			<div class="sub_title">
				<strong>보도자료</strong>
			</div>
		</div>

		<div class="sub_nav">
			<ul>
				<li><a class="current" href="../notice/list.php">보도자료</a></li>
				<li><a href="../greet/list.php">공지사항</a></li>
			</ul>
		</div>
		<article id="content">
			<div class="title_area">
				<h2 class="hidden">보도자료</h2>
			</div>
			<div class="content_area">
				<div class="summary">
				</div>

				<div class="photo_bbs_wrap">

					<div class="bbs_sort">
						<div class="total">총 <b><?= $total_record ?></b> 개의 게시물이 있습니다.</div>

						<select class="scale" name="scale"
							onchange="location.href='list.php?scale='+this.value+'&liststyle=<?= $liststyle ?>'">
							<option value=''><?= $scale ?>개씩</option>
							<option value='4'>4개씩</option>
							<option value='6'>6개씩</option>
							<option value='8'>8개씩</option>
							<option value='10'>10개씩</option>
						</select>

						<ul class="lst_style">
							<li class="active"><a href="list.php?liststyle=list&scale=<?= $scale ?>">목록형</a></li>
							<li><a href="list.php?liststyle=box&scale=<?= $scale ?>">박스형</a></li>
						</ul>
					</div>



					<div class="bbs_lst">
						<ul class="lst_cont">
							<?
							for ($i = $start; $i < $start + $scale && $i < $total_record; $i++) {
								mysqli_data_seek($result, $i);
								// 가져올 레코드로 위치(포인터) 이동  
								$row = mysqli_fetch_array($result);
								// 하나의 레코드 가져오기
							
								$item_num = $row[num];
								$item_id = $row[id];
								$item_name = $row[name];
								$item_nick = $row[nick];
								$item_hit = $row[hit];
								$item_date = $row[regist_day];
								$item_date = substr($item_date, 0, 10);
								// $item_category_1 = str_replace(" ", "&nbsp;", $row[category_1]);
								// $item_category_2 = str_replace(" ", "&nbsp;", $row[category_2]);
								$item_subject = str_replace(" ", "&nbsp;", $row[subject]);
								$item_content = $row[content];


								$len_content = mb_strlen($item_content, 'utf-8'); //본문 글의 총 길이
								if ($len_content > 60) // 제한글자수보다 크면
								{
									$item_content = mb_substr($item_content, 0, 60, 'utf-8');
									$item_content = $item_content . "...";
								}
								$item_content = str_replace(" ", " ", $item_content);




								// 이미지 경로 가져오기
								if ($row[file_copied_0]) {	// 첨부된 첫번째 이미지가 있으면 해당 이미지
									$item_img = './data/' . $row[file_copied_0];
								} else {
									$item_img = './data/default.jpg';	// 이미지가 없으면 default.jpg
								}

								?>
								<li>
									<a
										href="view.php?table=<?= $table ?>&num=<?= $item_num ?>&page=<?= $page ?>&liststyle=<?= $liststyle ?>">
										<div class="img"><img src="<?= $item_img ?>" alt="첨부된 이미지"></div>
										<div class="cont">
											<!-- <i><?= $item_category_1 ?></i>
											<i><?= $item_category_2 ?></i> -->
											<strong><?= $item_subject ?></strong>
											<p><?= $item_content ?></p>
											<span><?= $item_nick ?></span>
											<span><?= $item_date ?></span>
											<span><i class="fa-regular fa-eye"><i>조회수</i></i> <?= $item_hit ?></span>
										</div>
									</a>
								</li>
								<?
								$number--;
							}
							?>
						</ul>
					</div>

					<div class="page_num">
						<span class="prev">이전</span>
						<?
						// 게시판 목록 하단에 페이지 링크 번호 출력
						for ($i = 1; $i <= $total_page; $i++) {
							if ($page == $i)     // 현재 페이지 번호 링크 안함
							{
								echo "<span class='active'>{$i}</span>";
							} else {
								if ($mode == "search")	// 검색리스트일 때 (page, scale, mode, find, search)
								{
									echo "<span><a href='list.php?page=$i&scale=$scale&liststyle=$liststyle&mode=search&find=$find&search=$search'>{$i}</a></span>";
								} else {    // 일반 리스트일 때
									echo "<span><a href='list.php?page=$i&scale=$scale&liststyle=$liststyle'>{$i}</a></span>";
								}
							}
						}
						?>
						<span class="next">다음</span>
					</div>

					<div class="btn_wrap">
						<a href="list.php?table=<?= $table ?>&page=<?= $page ?>&liststyle=<?= $liststyle ?>">목록</a>
						<? if ($userlevel == 1) {   // 로그인 했을 경우 ?>
							<a href="write_form.php?table=<?= $table ?>&liststyle=<?= $liststyle ?>" class='active'>글쓰기</a>
						<? } ?>
					</div>


					<div class="bbs_search">
						<form name="board_form" method="post"
							action="list.php?table=<?= $table ?>&mode=search&liststyle=<?= $liststyle ?>">
							<select name="find">
								<option value='subject'>제목</option>
								<option value='content'>내용</option>
								<option value='nick'>별명</option>
								<option value='name'>이름</option>
							</select>
							<label class="hidden" for="search"></label>
							<input type="text" name="search" id="search" placeholder="검색어를 입력하세요">
							<button type="submit">검색</button>
						</form>
					</div>
				</div>
			</div>
			<? include "../common/sub_footer.html" ?>
	</div>
	</article>

	<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
	<script src="../common/js/jquery-1.12.4.min.js"></script>

	<script src="../common/js/jquery-migrate-1.4.1.min.js"></script>
	<script src="../common/js/jquery.easing.1.3.js"></script>
	<script src="../common/js/common.js"></script>
	<script src="../mainjs/mainjs.js"></script>

	<?
	if (!$liststyle) {
		$liststyle = 'list';	// 리스트 스타일
		echo "
				<script>
					$('.lst_style li').removeClass('active');
					$('.lst_style li:eq(0)').addClass('active');
				</script>
			";
	} else if ($liststyle == 'box') {
		$liststyle = 'box';	// 리스트 스타일
		echo "
				<script>
					$('.lst_style li').removeClass('active');
					$('.lst_style li:eq(1)').addClass('active');
					$('.bbs_lst').addClass('box');
				</script>
			";

	}
	?>

</body>

</html>