<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006~2018 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------


/*获取商品列表*/
Route::get('api/getGoodsConcise/[:date]/[:token]','api/index/getGoodsList')->allowCrossDomain();
/*获取单个商品信息*/
Route::get('api/getGoodsInfo/[:id]/[:token]','api/index/getGoodsInfo')->allowCrossDomain();
/*获取用户信息*/
Route::rule('api/login/:token','api/index/getUserInfo')->allowCrossDomain();
/*计算金额*/
Route::post('api/preOrder','api/index/settleAccounts')->allowCrossDomain();
/*添加商品到购物车*/
Route::post('api/addShopCart/[:token]','api/index/addShopCart')->allowCrossDomain();
/*获取购物车商品*/
Route::post('api/getShopCart/[:token]','api/index/getShopCart')->allowCrossDomain();
/*删除购物车商品并获取新的列表*/
Route::post('api/delShopCart/[:token]','api/index/delShopCart')->allowCrossDomain();
/*获取用户收货地址列表*/
Route::post('api/getAddressList','api/index/getAddressList')->allowCrossDomain();
/*新增/修改地址列表*/
Route::post('api/addAddress','api/index/addAddress')->allowCrossDomain();
/*删除地址列表*/
Route::post('api/delAddress','api/index/delAddress')->allowCrossDomain();

/*新增一个订单*/
Route::post('api/addOrder','api/Order/newOrder')->allowCrossDomain();
/*查询订单*/
Route::rule('api/queryOrder/:type/:token','api/Order/queryArrearage')->allowCrossDomain();

/*支付回调*/
Route::rule('api/wxNotify','api/Order/wxNotify')->allowCrossDomain();



/*测试*/
Route::get('api/test/:id','api/Order/test')->allowCrossDomain();


return [

];
