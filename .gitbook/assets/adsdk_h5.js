"use strict";

(function () {
    var bannerAds = {};
    var interstitialAds = {};
    var videoAds = {};
    var AdSDK = window.AdSDK = {
        init: function () {
            GameSDK.registerCallback("ad_banner_onLoad", function (param) {
                var banner = bannerAds[param.adId];
                if (banner && banner.onLoad) {
                    banner.onLoad(param.data);
                }
            });
            GameSDK.registerCallback("ad_banner_onError", function (param) {
                var banner = bannerAds[param.adId];
                if (banner && banner.onError) {
                    banner.onError(param.data);
                }
            });
            GameSDK.registerCallback("ad_banner_onResize", function (param) {
                var banner = bannerAds[param.adId];
                if (banner && banner.onResize) {
                    banner.onResize(param.data);
                }
            });
            GameSDK.registerCallback("ad_interstitial_onLoad", function (param) {
                var interstitialAd = interstitialAds[param.adId];
                if (interstitialAd && interstitialAd.onLoad) {
                    interstitialAd.onLoad(param.data);
                }
            });
            GameSDK.registerCallback("ad_interstitial_onError", function (param) {
                var interstitialAd = interstitialAds[param.adId];
                if (interstitialAd && interstitialAd.onError) {
                    interstitialAd.onError(param.data);
                }
            });
            GameSDK.registerCallback("ad_interstitial_onResize", function (param) {
                var interstitialAd = interstitialAds[param.adId];
                if (interstitialAd && interstitialAd.onResize) {
                    interstitialAd.onResize(param.data);
                }
            });
            GameSDK.registerCallback("ad_rewardedVideo_onLoad", function (param) {
                var videoAd = videoAds[param.adId];
                if (videoAd && videoAd.onLoad) {
                    videoAd.onLoad(param.data);
                }
            });
            GameSDK.registerCallback("ad_rewardedVideo_onError", function (param) {
                var videoAd = videoAds[param.adId];
                if (videoAd && videoAd.onError) {
                    videoAd.onError(param.data);
                }
            });
            GameSDK.registerCallback("ad_rewardedVideo_onClose", function (param) {
                var videoAd = videoAds[param.adId];
                if (videoAd && videoAd.onClose) {
                    videoAd.onClose(param.data);
                }
            });
            GameSDK.registerCallback("ad_onShow", function (param) {
                if (param.type == 1) {
                    bannerAds[param.adId].mHandler(param.success);
                } else if (param.type == 2) {
                    interstitialAds[param.adId].mHandler(param.success);
                } else if (param.type == 3) {
                    videoAds[param.adId].mHandler(param.success);
                }
            });
        },
    };


    // 创建Banner广告
    // 参数
    //   adId: string 广告序号ID
    //   bannerAdId: string Banner广告ID
    //   position: int 广告位置 1 屏幕顶部 2 屏幕底部 3屏幕中间
    AdSDK.createBannerAd = function (adId, bannerAdId, position) {

        var bannerAd = {"adId": adId};
        var param = {
            "adId": adId,
            "bannerAdId": bannerAdId,
            "position": position,
        };
        GameSDK.callNative("ad_banner_create", param);

        //显示 banner 广告
        bannerAd.show = function () {
            var param = {
                "adId": adId
            };
            GameSDK.callNative("ad_banner_show", param);
            var promise = new Promise(function (resolve, reject) {
                var handler = function (params) {
                    if (params == 0) {
                        resolve();
                    } else {
                        reject();
                    }
                };
                bannerAd.mHandler = handler;
            });
            return promise;

        };
        //隐藏 banner 广告
        bannerAd.hide = function () {
            var param = {
                "adId": adId
            };
            GameSDK.callNative("ad_banner_hide", param);
        };

        // 销毁 banner 广告
        bannerAd.destroy = function () {
            var param = {
                "adId": adId
            };
            bannerAds[adId] = null;
            GameSDK.callNative("ad_banner_destroy", param);
        };

        //监听 banner 广告加载事件
        bannerAd.onLoad = function (cb) {
            bannerAds[adId].onLoad = cb;
        };

        //监听 banner 广告错误事件
        bannerAd.onError = function (cb) {
            bannerAds[adId].onError = cb;
        };

        //监听 banner 广告尺寸变化事件  未实现
        bannerAd.onResize = function (cb) {
            bannerAds[adId].onResize = cb;
        };

        //取消监听 banner 广告加载事件
        bannerAd.offLoad = function (cb) {
            bannerAds[adId].onLoad = null;
            cb && cb();
        };

        //取消监听 banner 广告错误事件
        bannerAd.offError = function (cb) {
            bannerAds[adId].onError = null;
            cb && cb();
        };

        //取消监听 banner 广告尺寸变化事件
        bannerAd.offResize = function (cb) {
            bannerAds[adId].onResize = null;
            //未实现
            cb && cb();
        };
        bannerAds[adId] = bannerAd;
        return bannerAd;
    };
    // 创建插屏广告
    // 参数
    //   adId: string 广告序号ID
    //   interstitialAdId: string 插屏广告ID
    //   style: int 广告类型 1 全屏 2 半屏
    AdSDK.createInterstitialAd = function (adId, interstitialAdId, style) {

        var interstitialAd = {"adId": adId};
        var param = {
            "adId": adId,
            "interstitialAdId": interstitialAdId,
            "style": style,
        };
        GameSDK.callNative("ad_interstitial_create", param);

        //显示 插屏 广告
        interstitialAd.show = function () {
            var param = {
                "adId": adId
            };
            GameSDK.callNative("ad_interstitial_show", param);
            var promise = new Promise(function (resolve, reject) {
                var handler = function (params) {
                    if (params == 0) {
                        resolve();
                    } else {
                        reject();
                    }
                };
                interstitialAd.mHandler = handler;
            });
            return promise;
        };

        // 隐藏 插屏 广告
        interstitialAd.hide = function () {
            var param = {
                "adId": adId
            };
            GameSDK.callNative("ad_interstitial_hide", param);
        };


        // 销毁 插屏 广告
        interstitialAd.destroy = function () {
            var param = {
                "adId": adId
            };
            interstitialAds[adId] = null;
            GameSDK.callNative("ad_interstitial_destroy", param);
        };

        // 监听 插屏 广告加载事件
        interstitialAd.onLoad = function (cb) {
            interstitialAds[adId].onLoad = cb;
        };

        // 监听 插屏 广告错误事件
        interstitialAd.onError = function (cb) {
            interstitialAds[adId].onError = cb;
        };
        // 监听 插屏 广告尺寸变化事件
        interstitialAd.onResize = function (cb) {
            interstitialAds[adId].onResize = cb;
        };

        //取消监听 插屏 广告加载事件
        interstitialAd.offLoad = function (cb) {
            interstitialAds[adId].onLoad = null;
            cb && cb();
        };

        //取消监听 插屏 广告错误事件
        interstitialAd.offError = function (cb) {
            interstitialAds[adId].onError = null;
            cb && cb();
        };

        //取消监听 插屏 广告尺寸变化事件
        interstitialAd.offResize = function (cb) {
            interstitialAds[adId].onResize = null;
            cb && cb();
        };
        interstitialAds[adId] = interstitialAd;
        return interstitialAd;
    };

    // 创建激励视频广告
    // 参数
    //   videoAdId: string 视频广告ID
    //   screenOrientation: int 广告类型 1 横屏 2 竖屏
    AdSDK.createRewardedVideoAd = function (adId, videoAdId, screenOrientation) {
        var rewardedVideoAd = {"adId": adId};
        var param = {
            "adId": adId,
            "videoAdId": videoAdId,
            "screenOrientation": screenOrientation,
        };
        GameSDK.callNative("ad_rewardedVideo_create", param);

        // 隐藏激励视频广告
        rewardedVideoAd.hide = function () {
            var param = {
                "adId": adId
            };
            GameSDK.callNative("ad_rewardedVideo_hide", param);
        };

        //显示激励视频广告
        rewardedVideoAd.show = function () {
            var param = {
                "adId": adId
            };
            GameSDK.callNative("ad_rewardedVideo_show", param);
            var promise = new Promise(function (resolve, reject) {
                var handler = function (params) {
                    if (params == 0) {
                        resolve();
                    } else {
                        reject();
                    }
                };
                rewardedVideoAd.mHandler = handler;
            });
            return promise;
        };

        //监听激励视频广告加载事件
        rewardedVideoAd.onLoad = function (cb) {
            videoAds[adId].onLoad = cb;
        };

        //监听激励视频错误事件
        rewardedVideoAd.onError = function (cb) {
            videoAds[adId].onError = cb;
        };

        //监听用户点击 关闭广告 按钮的事件
        rewardedVideoAd.onClose = function (cb) {
            videoAds[adId].onClose = cb;
        };

        //监听激励视频广告加载事件
        rewardedVideoAd.offLoad = function (cb) {
            videoAds[adId].onLoad = null;
            cb && cb();
        };

        //监听激励视频错误事件
        rewardedVideoAd.offError = function (cb) {
            videoAds[adId].onError = null;
            cb && cb();
        };

        //监听用户点击 关闭广告 按钮的事件
        rewardedVideoAd.offClose = function (cb) {
            videoAds[adId].onClose = null;
            cb && cb();
        };
        videoAds[adId] = rewardedVideoAd;
        return rewardedVideoAd;
    };

})()


