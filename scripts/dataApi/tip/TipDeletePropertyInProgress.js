/**
 * Created by 123 on 2016/12/6.
 */
fastmap.dataApi.TipDeletePropertyInProgress = fastmap.dataApi.Tip.extend({

    /*
     * 返回参数赋值
     */
    setAttributes: function (data) {
        this.geoLiveType = 'TIPDELETEPROPERTYINPROGRESS';
        this.code = '1214'; // 删除在建属性

        if (data.deep) {
            this.deep = {
                f: {}
            };
            if (data.deep.f) {
                this.deep.f = data.deep.f;
                if (this.deep.f.type === 1 && this.deep.f.id) {
                    this.deep.f.id = parseInt(this.deep.f.id, 10);
                }
            }
        } else {
            this.deep = {
                f: {}
            };
        }
    },

    getIntegrate: function () {
        var data = this.deepCopy(this);
        if (data.deep.f.id) {
            data.deep.f.id = data.deep.f.id.toString();
        }
        return data;
    },

    getSnapShot: function () {
        var data = {};
        data.deep = this.deep;
        return data;
    }
});

fastmap.dataApi.tipDeletePropertyInProgress = function (data, options) {
    return new fastmap.dataApi.TipDeletePropertyInProgress(data, options);
};
