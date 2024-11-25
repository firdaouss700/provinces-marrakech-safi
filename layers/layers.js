var wms_layers = [];


        var lyr_ESRIShadedRelief_0 = new ol.layer.Tile({
            'title': 'ESRI Shaded Relief',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_province_marrakech_safi_jointures_1 = new ol.format.GeoJSON();
var features_province_marrakech_safi_jointures_1 = format_province_marrakech_safi_jointures_1.readFeatures(json_province_marrakech_safi_jointures_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_province_marrakech_safi_jointures_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_province_marrakech_safi_jointures_1.addFeatures(features_province_marrakech_safi_jointures_1);
var lyr_province_marrakech_safi_jointures_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_province_marrakech_safi_jointures_1, 
                style: style_province_marrakech_safi_jointures_1,
                popuplayertitle: "province_marrakech_safi_jointures",
                interactive: true,
    title: 'province_marrakech_safi_jointures<br />\
    <img src="styles/legend/province_marrakech_safi_jointures_1_0.png" /> province de Youssoufia 246098<br />\
    <img src="styles/legend/province_marrakech_safi_jointures_1_1.png" /> province de Rehamna 345772<br />\
    <img src="styles/legend/province_marrakech_safi_jointures_1_2.png" /> province de Chichaoua 378932<br />\
    <img src="styles/legend/province_marrakech_safi_jointures_1_3.png" /> province de Essaouira 425449<br />\
    <img src="styles/legend/province_marrakech_safi_jointures_1_4.png" /> province de El Kalaa des Seraghna 560075<br />\
    <img src="styles/legend/province_marrakech_safi_jointures_1_5.png" /> province de Al Haouz 642171<br />\
    <img src="styles/legend/province_marrakech_safi_jointures_1_6.png" /> province de Safi 719299<br />\
    <img src="styles/legend/province_marrakech_safi_jointures_1_7.png" /> province de Marrakech 1560704<br />'
        });
var format_Limite_Maroc_2 = new ol.format.GeoJSON();
var features_Limite_Maroc_2 = format_Limite_Maroc_2.readFeatures(json_Limite_Maroc_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limite_Maroc_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limite_Maroc_2.addFeatures(features_Limite_Maroc_2);
var lyr_Limite_Maroc_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limite_Maroc_2, 
                style: style_Limite_Maroc_2,
                popuplayertitle: "Limite_Maroc",
                interactive: true,
                title: '<img src="styles/legend/Limite_Maroc_2.png" /> Limite_Maroc'
            });
var format_cheflieu_3 = new ol.format.GeoJSON();
var features_cheflieu_3 = format_cheflieu_3.readFeatures(json_cheflieu_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cheflieu_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cheflieu_3.addFeatures(features_cheflieu_3);
var lyr_cheflieu_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cheflieu_3, 
                style: style_cheflieu_3,
                popuplayertitle: "chef lieu",
                interactive: true,
                title: 'chef lieu'
            });

lyr_ESRIShadedRelief_0.setVisible(true);lyr_province_marrakech_safi_jointures_1.setVisible(true);lyr_Limite_Maroc_2.setVisible(true);lyr_cheflieu_3.setVisible(true);
var layersList = [lyr_ESRIShadedRelief_0,lyr_province_marrakech_safi_jointures_1,lyr_Limite_Maroc_2,lyr_cheflieu_3];
lyr_province_marrakech_safi_jointures_1.set('fieldAliases', {'fid': 'fid', 'Code_Provi': 'Code_Provi', 'Nom_Provin': 'Nom_Provin', 'Data_Devoir_Carte_Thematique — Data_provinces_Code_Provi': 'Data_Devoir_Carte_Thematique — Data_provinces_Code_Provi', 'Data_Devoir_Carte_Thematique — Data_provinces_Nom_Provin': 'Data_Devoir_Carte_Thematique — Data_provinces_Nom_Provin', 'Data_Devoir_Carte_Thematique — Data_provinces_Area': 'Data_Devoir_Carte_Thematique — Data_provinces_Area', 'Data_Devoir_Carte_Thematique — Data_provinces_Population_2024': 'Data_Devoir_Carte_Thematique — Data_provinces_Population_2024', 'Data_Devoir_Carte_Thematique — Data_provinces_Chef lieu': 'Data_Devoir_Carte_Thematique — Data_provinces_Chef lieu', 'Data_Devoir_Carte_Thematique — Data_provinces_lat': 'Data_Devoir_Carte_Thematique — Data_provinces_lat', 'Data_Devoir_Carte_Thematique — Data_provinces_long': 'Data_Devoir_Carte_Thematique — Data_provinces_long', });
lyr_Limite_Maroc_2.set('fieldAliases', {'fid': 'fid', });
lyr_cheflieu_3.set('fieldAliases', {'fid': 'fid', 'Code_Provi': 'Code_Provi', 'Nom_Provin': 'Nom_Provin', 'Area': 'Area', 'Population_2024': 'Population_2024', 'Chef lieu': 'Chef lieu', 'lat': 'lat', 'long': 'long', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_province_marrakech_safi_jointures_1.set('fieldImages', {'fid': 'Hidden', 'Code_Provi': 'Hidden', 'Nom_Provin': 'Hidden', 'Data_Devoir_Carte_Thematique — Data_provinces_Code_Provi': 'TextEdit', 'Data_Devoir_Carte_Thematique — Data_provinces_Nom_Provin': 'TextEdit', 'Data_Devoir_Carte_Thematique — Data_provinces_Area': 'TextEdit', 'Data_Devoir_Carte_Thematique — Data_provinces_Population_2024': 'Hidden', 'Data_Devoir_Carte_Thematique — Data_provinces_Chef lieu': 'TextEdit', 'Data_Devoir_Carte_Thematique — Data_provinces_lat': 'Hidden', 'Data_Devoir_Carte_Thematique — Data_provinces_long': 'Hidden', });
lyr_Limite_Maroc_2.set('fieldImages', {'fid': 'TextEdit', });
lyr_cheflieu_3.set('fieldImages', {'fid': 'TextEdit', 'Code_Provi': 'TextEdit', 'Nom_Provin': 'TextEdit', 'Area': 'TextEdit', 'Population_2024': 'Range', 'Chef lieu': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_province_marrakech_safi_jointures_1.set('fieldLabels', {'Data_Devoir_Carte_Thematique — Data_provinces_Code_Provi': 'inline label - always visible', 'Data_Devoir_Carte_Thematique — Data_provinces_Nom_Provin': 'inline label - always visible', 'Data_Devoir_Carte_Thematique — Data_provinces_Area': 'inline label - always visible', 'Data_Devoir_Carte_Thematique — Data_provinces_Chef lieu': 'inline label - always visible', });
lyr_Limite_Maroc_2.set('fieldLabels', {'fid': 'no label', });
lyr_cheflieu_3.set('fieldLabels', {'fid': 'no label', 'Code_Provi': 'inline label - always visible', 'Nom_Provin': 'inline label - always visible', 'Area': 'inline label - always visible', 'Population_2024': 'inline label - always visible', 'Chef lieu': 'inline label - always visible', 'lat': 'inline label - always visible', 'long': 'inline label - always visible', });
lyr_cheflieu_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});