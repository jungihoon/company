<?
session_start();
@extract($_POST);
@extract($_GET);
@extract($_SESSION);
// 새글쓰기 =>  $table='product' , $liststyle='box' , 세션변수
// 수정하기 => $table, $num, $page, $mode


include "../lib/dbconn.php";

if ($mode == "modify") //수정 글쓰기면
{
	$sql = "select * from $table where num=$num";
	$result = mysqli_query($connect, $sql);

	$row = mysqli_fetch_array($result);


	$item_nick = $row[nick];
	$item_subject = $row[subject];
	$item_content = $row[content];

	$item_file_0 = $row[file_name_0];
	$item_file_1 = $row[file_name_1];
	$item_file_2 = $row[file_name_2];

	$copied_file_0 = $row[file_copied_0];
	$copied_file_1 = $row[file_copied_1];
	$copied_file_2 = $row[file_copied_2];
}
?>

<!DOCTYPE html>
<html lang="ko">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>제품소개</title>
	<link
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
		rel="stylesheet" />
	<link rel="stylesheet" href="../common/css/common_sub.css" />
	<link rel="stylesheet" href="../common/css/aos.css" />
	<link rel="stylesheet" href="../common/css/common.css">
	<link rel="stylesheet" href="./css/greet.css">
	<link rel="stylesheet" href="./css/notice.css">


	<script>
		function check_input() {
			if (!document.board_form.subject.value) {
				alert("제목을 입력하세요!");
				document.board_form.subject.focus();
				return;
			}

			if (!document.board_form.content.value) {
				alert("내용을 입력하세요!");
				document.board_form.content.focus();
				return;
			}

			// if (!document.board_form.category_1.value) {
			// 	alert("카테고리를 선택하세요!");
			// 	document.board_form.category_1.focus();
			// 	return;
			// }

			// if (!document.board_form.category_2.value) {
			// 	alert("카테고리를 입력하세요!");
			// 	document.board_form.category_2.focus();
			// 	return;
			// }

			document.board_form.submit();
		}
	</script>
</head>

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
				<strong>고객센터</strong>
			</div>
		</div>

		<div class="sub_nav">
			<ul>
				<li><a class="current" href="../sub6/sub1_3.html">??</a></li>
				<li><a href="./list.php">공지사항</a></li>
			</ul>
		</div>
		<article id="content">
			<div class="title_area">
				<h2>제품소개</h2>
			</div>
			<div class="content_area">
				<div class="summary">
					<p>포스코엠텍 제품소개를 알려드립니다.</p>
					<p>철강포장 및 소재 전문기업으로서 철강사업에 새로운 가치를 제공하고 시너지를 창출하고자 합니다.</p>
				</div>

				<div class="photo_bbs_wrap">

					<? if ($mode == "modify") {	// 수정하기 => insert.php 에 mode=modify와 num을 넘겨준다 ?>
						<form name="board_form" method="post"
							action="insert.php?mode=modify&num=<?= $num ?>&page=<?= $page ?>&table=<?= $table ?>&liststyle=<?= $liststyle ?>"
							enctype="multipart/form-data">

						<? } else {	// 새 글쓰기 ?>
							<form name="board_form" method="post" action="insert.php?table=<?= $table ?>&liststyle=<?= $liststyle ?>"
								enctype="multipart/form-data">
							<? } ?>


							<ul class="bbs_write_top">
								<li>
									<dl>
										<dt>닉네임</dt>
										<? if ($mode == 'modify') { ?>
											<dd><?= $item_nick ?></dd>
										<? } else { //새글쓰기 ?>
											<dd><?= $usernick ?></dd>
										<? } ?>
									</dl>
								</li>
								<!-- <li>
									<dl>
										<dt><label>카테고리</label></dt>
										<dd>
											<select name="category_1">

											</select>
											<label for="category_2" class="hidden">카테고리2</label>
											<input type="text" name="category_2" id="category_2" value="<?= $item_category_2 ?>"
												placeholder="두번째 카테고리를 입력하세요">
										</dd>
									</dl>
								</li> -->
								<li>
									<dl>
										<dt><label for="subject">제목</label></dt>
										<dd>
											<input type="text" name="subject" id="subject" required value="<?= $item_subject ?>">
										</dd>
									</dl>
								</li>
								<li>
									<dl>
										<dt><label for="contents">내용</label></dt>
										<dd>
											<? if ($userid && ($mode != "modify")) {   // 새글쓰기 에서만 HTML 쓰기가 보인다 ?>
												<div class="check">
													<input type="checkbox" name="html_ok" id="html_ok" value="y">
													<label for="html_ok">HTML 쓰기</label>
												</div>
											<? } ?>
											<div>
												<textarea name="content" id="contents"><?= $item_content ?></textarea>
											</div>
										</dd>
									</dl>
								</li>
								<li>
									<dl>
										<dt><label for="file1">이미지파일1</label></dt>
										<dd>
											<input type="file" id="file1" name="upfile[]">

											<? if ($mode == "modify" && $item_file_0) {	// 수정하기 및 0번파일이 있을 때 ?>
												<div class="delete_ok">
													<?= $item_file_0 ?> 파일이 등록되어 있습니다.
													<div class="check">
														<input type="checkbox" id="del_file1" name="del_file[]" value="0">
														<label for="del_file1">삭제</label>
													</div>
												</div>
											<? } ?>
										</dd>
									</dl>
								</li>
								<li>
									<dl>
										<dt><label for="file2">이미지파일2</label></dt>
										<dd>
											<input type="file" id="file2" name="upfile[]">

											<? if ($mode == "modify" && $item_file_1) {	// 수정하기 및 1번파일이 있을 때 ?>
												<div class="delete_ok">
													<?= $item_file_1 ?> 파일이 등록되어 있습니다.
													<div class="check">
														<input type="checkbox" id="del_file2" name="del_file[]" value="1">
														<label for="del_file2">삭제</label>
													</div>
												</div>
											<? } ?>
										</dd>
									</dl>
								</li>
								<li>
									<dl>
										<dt><label for="file3">이미지파일3</label></dt>
										<dd>
											<input type="file" id="file3" name="upfile[]">

											<? if ($mode == "modify" && $item_file_2) {	// 수정하기 및 2번파일이 있을 때 ?>
												<div class="delete_ok">
													<?= $item_file_2 ?> 파일이 등록되어 있습니다.
													<div class="check">
														<input type="checkbox" id="del_file3" name="del_file[]" value="2">
														<label for="del_file3">삭제</label>
													</div>
												</div>
											<? } ?>
										</dd>
									</dl>
								</li>
							</ul>

							<div class="btn_wrap">
								<a href="list.php?table=<?= $table ?>&page=<?= $page ?>&liststyle=<?= $liststyle ?>">목록</a>
								<a href="#" onclick="check_input()" class='active'>완료</a>
							</div>

						</form>
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

</body>

</html>