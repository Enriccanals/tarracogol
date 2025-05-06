var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CampdeFutbol_1 = new ol.format.GeoJSON();
var features_CampdeFutbol_1 = format_CampdeFutbol_1.readFeatures(json_CampdeFutbol_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CampdeFutbol_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CampdeFutbol_1.addFeatures(features_CampdeFutbol_1);
var lyr_CampdeFutbol_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CampdeFutbol_1, 
                style: style_CampdeFutbol_1,
                popuplayertitle: 'Camp de Futbol',
                interactive: true,
                title: '<img src="styles/legend/CampdeFutbol_1.png" /> Camp de Futbol'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_CampdeFutbol_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_CampdeFutbol_1];
lyr_CampdeFutbol_1.set('fieldAliases', {'fid': 'fid', 'Club': 'Club', 'Telèfon': 'Telèfon', 'Ubicació': 'Ubicació', 'Superfície': 'Superfície', });
lyr_CampdeFutbol_1.set('fieldImages', {'fid': 'TextEdit', 'Club': 'TextEdit', 'Telèfon': 'TextEdit', 'Ubicació': 'TextEdit', 'Superfície': '', });
lyr_CampdeFutbol_1.set('fieldLabels', {'fid': 'no label', 'Club': 'no label', 'Telèfon': 'no label', 'Ubicació': 'no label', 'Superfície': 'no label', });
lyr_CampdeFutbol_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});