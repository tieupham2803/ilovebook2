<?php namespace frontend\widgets;

use yii\base\Widget;
use yii\helpers\Html;
use frontend\models\Category;

class categoryproductWidget extends Widget
{
    public $message;

    public function init()
    {
        parent::init();
       
        }

    public function run()
    {
    	$data = new Category();
    	$dataParent = $data->getCategoryBy();
		return $this->render('categoryproductWidget',['dataParent'=>$dataParent]);       }
}
?>