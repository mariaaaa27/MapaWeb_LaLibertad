ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32718").setExtent([-115035.187161, 8989531.114177, 429634.225426, 9270868.620679]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DEPLaLibertad_1 = new ol.format.GeoJSON();
var features_DEPLaLibertad_1 = format_DEPLaLibertad_1.readFeatures(json_DEPLaLibertad_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_DEPLaLibertad_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DEPLaLibertad_1.addFeatures(features_DEPLaLibertad_1);
var lyr_DEPLaLibertad_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DEPLaLibertad_1, 
                style: style_DEPLaLibertad_1,
                popuplayertitle: 'DEP La Libertad',
                interactive: true,
                title: '<img src="styles/legend/DEPLaLibertad_1.png" /> DEP La Libertad'
            });
var format_prov_la_libertad_2 = new ol.format.GeoJSON();
var features_prov_la_libertad_2 = format_prov_la_libertad_2.readFeatures(json_prov_la_libertad_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_prov_la_libertad_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_prov_la_libertad_2.addFeatures(features_prov_la_libertad_2);
var lyr_prov_la_libertad_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_prov_la_libertad_2, 
                style: style_prov_la_libertad_2,
                popuplayertitle: 'prov_la_libertad',
                interactive: true,
    title: 'prov_la_libertad<br />\
    <img src="styles/legend/prov_la_libertad_2_0.png" /> ASCOPE<br />\
    <img src="styles/legend/prov_la_libertad_2_1.png" /> BOLIVAR<br />\
    <img src="styles/legend/prov_la_libertad_2_2.png" /> CHEPEN<br />\
    <img src="styles/legend/prov_la_libertad_2_3.png" /> GRAN CHIMU<br />\
    <img src="styles/legend/prov_la_libertad_2_4.png" /> JULCAN<br />\
    <img src="styles/legend/prov_la_libertad_2_5.png" /> OTUZCO<br />\
    <img src="styles/legend/prov_la_libertad_2_6.png" /> PACASMAYO<br />\
    <img src="styles/legend/prov_la_libertad_2_7.png" /> PATAZ<br />\
    <img src="styles/legend/prov_la_libertad_2_8.png" /> SANCHEZ CARRION<br />\
    <img src="styles/legend/prov_la_libertad_2_9.png" /> SANTIAGO DE CHUCO<br />\
    <img src="styles/legend/prov_la_libertad_2_10.png" /> TRUJILLO<br />\
    <img src="styles/legend/prov_la_libertad_2_11.png" /> VIRU<br />' });
var format_RVD_Eje_3 = new ol.format.GeoJSON();
var features_RVD_Eje_3 = format_RVD_Eje_3.readFeatures(json_RVD_Eje_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_RVD_Eje_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RVD_Eje_3.addFeatures(features_RVD_Eje_3);
var lyr_RVD_Eje_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RVD_Eje_3, 
                style: style_RVD_Eje_3,
                popuplayertitle: 'RVD_Eje',
                interactive: true,
                title: '<img src="styles/legend/RVD_Eje_3.png" /> RVD_Eje'
            });
var format_RVV_Eje__4 = new ol.format.GeoJSON();
var features_RVV_Eje__4 = format_RVV_Eje__4.readFeatures(json_RVV_Eje__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_RVV_Eje__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RVV_Eje__4.addFeatures(features_RVV_Eje__4);
var lyr_RVV_Eje__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RVV_Eje__4, 
                style: style_RVV_Eje__4,
                popuplayertitle: 'RVV_Eje_',
                interactive: true,
                title: '<img src="styles/legend/RVV_Eje__4.png" /> RVV_Eje_'
            });
var format_rios_quebradas_5 = new ol.format.GeoJSON();
var features_rios_quebradas_5 = format_rios_quebradas_5.readFeatures(json_rios_quebradas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_rios_quebradas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rios_quebradas_5.addFeatures(features_rios_quebradas_5);
var lyr_rios_quebradas_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rios_quebradas_5, 
                style: style_rios_quebradas_5,
                popuplayertitle: 'rios_quebradas',
                interactive: true,
                title: '<img src="styles/legend/rios_quebradas_5.png" /> rios_quebradas'
            });
var format_centroseducativos_6 = new ol.format.GeoJSON();
var features_centroseducativos_6 = format_centroseducativos_6.readFeatures(json_centroseducativos_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_centroseducativos_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_centroseducativos_6.addFeatures(features_centroseducativos_6);
var lyr_centroseducativos_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_centroseducativos_6, 
                style: style_centroseducativos_6,
                popuplayertitle: 'centros educativos',
                interactive: true,
    title: 'centros educativos<br />\
    <img src="styles/legend/centroseducativos_6_0.png" /> Básica Alternativa - Avanzado<br />\
    <img src="styles/legend/centroseducativos_6_1.png" /> Básica Alternativa - Inicial e Intermedio<br />\
    <img src="styles/legend/centroseducativos_6_2.png" /> Básica Especial - Inicial<br />\
    <img src="styles/legend/centroseducativos_6_3.png" /> Básica Especial - Primaria<br />\
    <img src="styles/legend/centroseducativos_6_4.png" /> Básica Especial - PRITE<br />\
    <img src="styles/legend/centroseducativos_6_5.png" /> Escuela Superior Pedagógica<br />\
    <img src="styles/legend/centroseducativos_6_6.png" /> Inicial - Cuna Jardín<br />\
    <img src="styles/legend/centroseducativos_6_7.png" /> Inicial - Jardín<br />\
    <img src="styles/legend/centroseducativos_6_8.png" /> Inicial No Escolarizado<br />\
    <img src="styles/legend/centroseducativos_6_9.png" /> Instancia de Apoyo<br />\
    <img src="styles/legend/centroseducativos_6_10.png" /> Primaria<br />\
    <img src="styles/legend/centroseducativos_6_11.png" /> Secundaria<br />\
    <img src="styles/legend/centroseducativos_6_12.png" /> Superior Formación Artística<br />\
    <img src="styles/legend/centroseducativos_6_13.png" /> Superior Pedagógica<br />\
    <img src="styles/legend/centroseducativos_6_14.png" /> Superior Tecnológica<br />\
    <img src="styles/legend/centroseducativos_6_15.png" /> Técnico Productiva - CETPRO<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_DEPLaLibertad_1.setVisible(true);lyr_prov_la_libertad_2.setVisible(true);lyr_RVD_Eje_3.setVisible(true);lyr_RVV_Eje__4.setVisible(true);lyr_rios_quebradas_5.setVisible(true);lyr_centroseducativos_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_DEPLaLibertad_1,lyr_prov_la_libertad_2,lyr_RVD_Eje_3,lyr_RVV_Eje__4,lyr_rios_quebradas_5,lyr_centroseducativos_6];
lyr_DEPLaLibertad_1.set('fieldAliases', {'fid': 'fid', 'NOMBDEP': 'NOMBDEP', 'COUNT': 'COUNT', 'FIRST_IDDP': 'FIRST_IDDP', 'HECTARES': 'HECTARES', });
lyr_prov_la_libertad_2.set('fieldAliases', {'fid': 'fid', 'COUNT': 'COUNT', 'FIRST_IDPR': 'FIRST_IDPR', 'NOMBPROV': 'NOMBPROV', 'FIRST_NOMB': 'FIRST_NOMB', 'LAST_DCTO': 'LAST_DCTO', 'LAST_LEY': 'LAST_LEY', 'FIRST_FECH': 'FIRST_FECH', 'LAST_FECHA': 'LAST_FECHA', 'MIN_SHAPE_': 'MIN_SHAPE_', 'ha': 'ha', 'ENLACES': 'ENLACES', 'IMAGENES': 'IMAGENES', });
lyr_RVD_Eje_3.set('fieldAliases', {'fid': 'fid', 'RODADURA': 'RODADURA', 'COD_DS11': 'COD_DS11', 'COD_DS12': 'COD_DS12', 'TRAY_DS12': 'TRAY_DS12', 'TRAY_DS11': 'TRAY_DS11', 'UBIGEO': 'UBIGEO', 'DEP': 'DEP', 'PROV': 'PROV', 'COD_DEP': 'COD_DEP', 'COD_PROV': 'COD_PROV', 'LONG_KM': 'LONG_KM', 'OBS': 'OBS', 'SENTIDO': 'SENTIDO', 'BASE': 'BASE', 'DATA': 'DATA', 'FECHA_ACTU': 'FECHA_ACTU', 'FUENTE': 'FUENTE', 'COD_RODADU': 'COD_RODADU', 'NOMBDIST': 'NOMBDIST', 'CAPITAL': 'CAPITAL', });
lyr_RVV_Eje__4.set('fieldAliases', {'fid': 'fid', 'COD_DS11': 'COD_DS11', 'COD_DS12': 'COD_DS12', 'TRAY_DS12': 'TRAY_DS12', 'TRAY_DS11': 'TRAY_DS11', 'UBIGEO': 'UBIGEO', 'DEP': 'DEP', 'PROV': 'PROV', 'COD_DEP': 'COD_DEP', 'COD_PROV': 'COD_PROV', 'LONG_KM': 'LONG_KM', 'OBS': 'OBS', });
lyr_rios_quebradas_5.set('fieldAliases', {'fid': 'fid', 'Rasgo_Prin': 'Rasgo_Prin', 'Rasgo_Secu': 'Rasgo_Secu', 'Nombre': 'Nombre', 'Longitud': 'Longitud', });
lyr_centroseducativos_6.set('fieldAliases', {'fid': 'fid', 'Código Modular': 'Código Modular', 'Anexo': 'Anexo', 'Nombre de SS.EE.': 'Nombre de SS.EE.', 'Ubigeo': 'Ubigeo', 'Departamento': 'Departamento', 'Provincia': 'Provincia', 'Distrito': 'Distrito', 'Código DRE/UGEL': 'Código DRE/UGEL', 'DRE / UGEL': 'DRE / UGEL', 'Centro Poblado': 'Centro Poblado', 'Código Centro Poblado': 'Código Centro Poblado', 'Código Local': 'Código Local', 'Dirección': 'Dirección', 'Nivel / Modalidad': 'Nivel / Modalidad', 'Gestion / Dependencia': 'Gestion / Dependencia', 'Altitud': 'Altitud', 'Fuente de coordenadas': 'Fuente de coordenadas', });
lyr_DEPLaLibertad_1.set('fieldImages', {'fid': 'Hidden', 'NOMBDEP': 'TextEdit', 'COUNT': 'Hidden', 'FIRST_IDDP': 'Hidden', 'HECTARES': 'Hidden', });
lyr_prov_la_libertad_2.set('fieldImages', {'fid': 'Hidden', 'COUNT': 'Hidden', 'FIRST_IDPR': 'Hidden', 'NOMBPROV': 'TextEdit', 'FIRST_NOMB': 'Hidden', 'LAST_DCTO': 'Hidden', 'LAST_LEY': 'Hidden', 'FIRST_FECH': 'Hidden', 'LAST_FECHA': 'Hidden', 'MIN_SHAPE_': 'Hidden', 'ha': 'TextEdit', 'ENLACES': 'TextEdit', 'IMAGENES': 'TextEdit', });
lyr_RVD_Eje_3.set('fieldImages', {'fid': 'Hidden', 'RODADURA': 'Hidden', 'COD_DS11': 'Hidden', 'COD_DS12': 'Hidden', 'TRAY_DS12': 'Hidden', 'TRAY_DS11': 'Hidden', 'UBIGEO': 'Hidden', 'DEP': 'Hidden', 'PROV': 'TextEdit', 'COD_DEP': 'Hidden', 'COD_PROV': 'Hidden', 'LONG_KM': 'Hidden', 'OBS': 'Hidden', 'SENTIDO': 'Hidden', 'BASE': 'Hidden', 'DATA': 'Hidden', 'FECHA_ACTU': 'Hidden', 'FUENTE': 'Hidden', 'COD_RODADU': 'Hidden', 'NOMBDIST': 'TextEdit', 'CAPITAL': 'Hidden', });
lyr_RVV_Eje__4.set('fieldImages', {'fid': 'Hidden', 'COD_DS11': 'Hidden', 'COD_DS12': 'Hidden', 'TRAY_DS12': 'Hidden', 'TRAY_DS11': 'Hidden', 'UBIGEO': 'Hidden', 'DEP': 'Hidden', 'PROV': 'TextEdit', 'COD_DEP': 'Hidden', 'COD_PROV': 'Hidden', 'LONG_KM': 'Hidden', 'OBS': 'Hidden', });
lyr_rios_quebradas_5.set('fieldImages', {'fid': 'Hidden', 'Rasgo_Prin': 'Hidden', 'Rasgo_Secu': 'Hidden', 'Nombre': 'TextEdit', 'Longitud': 'Hidden', });
lyr_centroseducativos_6.set('fieldImages', {'fid': 'Hidden', 'Código Modular': 'Hidden', 'Anexo': 'Hidden', 'Nombre de SS.EE.': 'Hidden', 'Ubigeo': 'Hidden', 'Departamento': 'Hidden', 'Provincia': 'Hidden', 'Distrito': 'Hidden', 'Código DRE/UGEL': 'Hidden', 'DRE / UGEL': 'Hidden', 'Centro Poblado': 'Hidden', 'Código Centro Poblado': 'Hidden', 'Código Local': 'Hidden', 'Dirección': 'Hidden', 'Nivel / Modalidad': 'TextEdit', 'Gestion / Dependencia': 'Hidden', 'Altitud': 'Hidden', 'Fuente de coordenadas': 'Hidden', });
lyr_DEPLaLibertad_1.set('fieldLabels', {'NOMBDEP': 'no label', });
lyr_prov_la_libertad_2.set('fieldLabels', {'NOMBPROV': 'no label', 'ha': 'no label', 'ENLACES': 'no label', 'IMAGENES': 'no label', });
lyr_RVD_Eje_3.set('fieldLabels', {'PROV': 'no label', 'NOMBDIST': 'no label', });
lyr_RVV_Eje__4.set('fieldLabels', {'PROV': 'no label', });
lyr_rios_quebradas_5.set('fieldLabels', {'Nombre': 'no label', });
lyr_centroseducativos_6.set('fieldLabels', {'Nivel / Modalidad': 'no label', });
lyr_centroseducativos_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});