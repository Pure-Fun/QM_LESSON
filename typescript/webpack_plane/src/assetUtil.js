var _this = this;
export var loadImage = function (url) {
    if (!Array.isArray(url)) {
        return loadOneImage(url);
    }
    var loaders = url.map(function (url) { return loadOneImage(url); });
    return Promise.all(loaders);
};
export var loadOneImage = function (url) {
    return new Promise(function (resolve, reject) {
        var onImageLoaded = function (e) {
            var imageLoader = e.currentTarget;
            var bitmapData = imageLoader.data;
            var texture = new egret.Texture();
            texture._setBitmapData(bitmapData);
            var bitmap = new egret.Bitmap(texture);
        };
        var imageLoader = new egret.ImageLoader();
        imageLoader.once(egret.Event.COMPLETE, onImageLoaded, _this);
        imageLoader.load(url);
    });
};
