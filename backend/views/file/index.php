<?php
$this->title = "Quan ly anh ";

$baseUrl =str_replace('/backend/web', '',Yii::$app->urlManager->baseUrl);

?>
<div class="file-index">
		<div class="panel panel-primary">
			 <div class="panel-heading">
			 	<h3 class="panel-title"><?php echo $this->title; ?> </h3>
			 </div>
 				<div class="panel-body">
 					
 					<iframe src="<?php echo $baseUrl; ?>/file/dialog.php" style="width:100%; height: 500px; border: none; "></iframe>
 				</div>
		</div>
</div>