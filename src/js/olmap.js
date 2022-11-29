import Map from "ol/Map";
import View from "ol/View";
import {Tile as TileLayer} from "ol/layer";
import {Cluster, XYZ} from "ol/source";
import {fromLonLat, toLonLat, transformExtent, transform} from "ol/proj";
import {Vector as VectorLayer} from "ol/layer";
import {Vector as VectorSource} from "ol/source";

export default {
    data() {
        return {};
    },
    mounted: function () {
        this.initMap()
    },
    methods: {

        initMap() {
            // 使用高德
            // const tileLayer = new TileLayer({
            //   source: new XYZ({
            //     url: "https://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}",
            //   }),
            // });


            // 矢量源
            this.source = new VectorSource({wrapX: false});
            // 矢量图层
            let vector = new VectorLayer({
                source: this.source,
            });

            // 天地图地图
            let tiandituLayer = new TileLayer({
                title: '天地图',
                source: new XYZ({
                    url: 'http://t{0-6}.tianditu.gov.cn/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=ce29ac6f0710024cad4886107b1b54af'
                })
            })
            // 标注图层
            let tileMark = new TileLayer({
                title: '标注图层',
                source: new XYZ({
                    url: 'http://t4.tianditu.com/DataServer?T=cva_w&tk=ce29ac6f0710024cad4886107b1b54af&x={x}&y={y}&l={z}'
                })
            })

            this.map = new Map({
                layers: [tiandituLayer, tileMark, vector],
                view: new View({
                    center: fromLonLat([114, 37]),
                    projection: 'EPSG:3857',
                    zoom: 5,
                    minZoom: 0,
                    maxZoom: 18,
                    constrainResolution: true,
                }),
                target: this.$refs.olMap,
            });

        },

    }

};