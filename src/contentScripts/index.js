import axios from 'axios'

import './index.styl'

// const blackList = ['BF103', 'BF201', 'BF203N', 'BF204N', 'BF302', 'BF306', 'BF307N', 'BF308N', 'BF309N', 'BF310N', 'BF311N', 'BF402N', 'BF403', 'BF501', 'BF502N', 'BF504', 'BF601', 'BF701', 'BF901', 'BF902N', 'BF903', 'BF904', 'BF905', 'BF905A', 'BF906', 'BF907', 'BF908', 'BF913', 'BF918', 'BF919', 'BF920', 'BF923', 'CL26', 'CN501N', 'CR26', 'CR26AN', 'CR34', 'CR36', 'DV11', 'DV11A', 'FD101', 'FD201', 'FD301', 'FD302', 'FT304', 'IP403', 'ME101', 'ME102', 'ME103', 'ME202', 'ME203', 'ME203A', 'ME204', 'ME301', 'ME302', 'ME303', 'ME304', 'ME401', 'ME402', 'ME403', 'ME404', 'ME405', 'ME501', 'ME601', 'ME605', 'ME701', 'ME801', 'ME802', 'ME901', 'SN101', 'SN201', 'SN202', 'SN203', 'SN301', 'SN401', 'SN402', 'SN403', 'SN501', 'SN601', 'ST100', 'ST105', 'ST300', 'ST305N', 'ST310N', 'ST320N', 'ST510', 'T128', 'T133', 'T138', 'T148', 'T151N', 'T152', 'T153', 'T158', 'T163', 'T183', 'T188', 'T193', 'T203', 'T208', 'T213', 'T218', 'T223', 'T228', 'T301', 'T333', 'T380', 'T635', 'T657', 'T658', 'T674', 'T723', 'T790', 'T803', 'T804', 'T805', 'T808', 'T809', 'T810', 'T826', 'T833', 'T838', 'T839', 'T854', 'T868', 'T875', 'T884', 'T886', 'T887', 'TX19', 'VD07', 'VD13', 'VD14']
// const whiteList = ['AB101', 'AB102', 'AB103', 'AB104', 'AB105', 'AB106', 'AB107', 'AB108', 'AB201', 'AB301', 'AB302', 'AB401', 'AB402', 'AB501', 'AB601', 'AB602', 'AB603', 'AB604', 'AB605', 'AB606', 'AB607', 'AB608', 'AB701', 'AB801', 'AB802', 'AB901', 'AB902', 'AB903', 'BF101', 'BF102', 'BF104', 'BF301', 'BF303', 'BF305', 'BF401', 'BF703', 'BF801', 'BF802', 'BF803', 'BF804', 'CL01', 'CL02', 'CL03', 'CL04', 'CL05', 'CL06', 'CL07', 'CL10', 'CL12', 'CL16', 'CL17', 'CL18', 'CL19', 'CL20N', 'CL21N', 'CL22', 'CL23', 'CL24', 'CL25', 'CL27', 'CL28', 'CL34N', 'CL46', 'CL47', 'CL48', 'CL49', 'CN101', 'CN102', 'CN103', 'CN104', 'CN105', 'CN106', 'CN107', 'CN108', 'CN109', 'CN201', 'CN202', 'CN301', 'CN302', 'CR01', 'CR02', 'CR04', 'CR06', 'CR07', 'CR08', 'CR10', 'CR11', 'CR12', 'CR15', 'CR16', 'CR17', 'CR18', 'CR19', 'CR19A', 'CR20', 'CR21', 'CR22', 'CR23', 'CR27', 'CR28', 'CR30N', 'CR31', 'CR33', 'CR37', 'CR38', 'CR40', 'CR42', 'CR43', 'CR44', 'DV01', 'DV01A', 'DV02N', 'DV03', 'DV04', 'DV05', 'DV06', 'DV07', 'DV08A', 'DV08B', 'DV09', 'DV10', 'DV12', 'FR101', 'FR102', 'FR103', 'FR201', 'FR202', 'FR203', 'FR204', 'FR205', 'FR206', 'FR207', 'FR208', 'FR301', 'FR302', 'FR303', 'FR304', 'FR305', 'FR401', 'FR402', 'FR403', 'FR404', 'FR405', 'FR406', 'FR407', 'FR501', 'FR502', 'FR601', 'FR602', 'FT101', 'FT102', 'FT201', 'FT202', 'FT203', 'FT204', 'FT301', 'FT302', 'FT303', 'FT401', 'FT501', 'GL01', 'GL02', 'GL03', 'GL04', 'GL05', 'GL06', 'GL07', 'GL09', 'GL11', 'GL12', 'GL13', 'GL14', 'GL15', 'GL16', 'GL17', 'GL19', 'GL20', 'GL21', 'GL22', 'GL23', 'GL24', 'HW101', 'HW102', 'HW103', 'HW201', 'HW202', 'HW301', 'HW302', 'HW303', 'HW401', 'HW402', 'HW403', 'HW404', 'HW405', 'IM01', 'IM02', 'IM04', 'IM05', 'IM06', 'IM07', 'IM08', 'IM10', 'IM11', 'IM13', 'IP101', 'IP102', 'IP103', 'IP201', 'IP202', 'IP203', 'IP301', 'IP302', 'IP303', 'IP401', 'IP402', 'IP404', 'IP405', 'IX', 'ME201', 'ME502', 'ME602', 'ME603', 'PL100', 'PL102', 'PL105', 'PL110', 'PL115', 'PL120', 'PL125', 'PL200', 'PL205', 'PL210', 'PL215', 'PL300', 'PL305', 'PL310', 'PR101', 'PR102', 'PR201N', 'PR301', 'PR302', 'PR401', 'QT01', 'QT02', 'QT03', 'QT04', 'QT07', 'QT08', 'QT11', 'QT12', 'QT15', 'QT16', 'QT19', 'ST200', 'ST205', 'ST210', 'ST215', 'ST400N', 'ST405', 'SV101', 'SV102', 'SV201', 'SV202', 'SV203', 'SV301', 'SV302', 'SV303', 'SV304', 'SV305', 'SV306', 'SV307', 'SV401', 'SV402', 'SV403', 'SV404', 'SV405', 'SV406', 'SV501', 'T123', 'T173', 'T178', 'TB101', 'TB102', 'TB103', 'TB104', 'TB201', 'TB202', 'TB301', 'TB302', 'TE100', 'TE105', 'TE110', 'TE200', 'TE205', 'TE210', 'TE215', 'TE220', 'TE225', 'TE230', 'TE300', 'TE400', 'TE405', 'TE500', 'TE600', 'TE700', 'TE720', 'TE800', 'TL01', 'TL02', 'TL02A', 'TL02B', 'TL03', 'TL03A', 'TL04', 'TL05', 'TL06', 'TM101', 'TM102', 'TM103', 'TM201', 'TM301', 'TM401', 'TM402', 'TM501', 'TM502', 'TM601', 'TM602', 'TM603', 'TS101N', 'TS102N', 'TS103N', 'TS201', 'TS202', 'TS203', 'TS204', 'TS205', 'TS206N', 'TS207', 'TS208', 'TS301N', 'TS302N', 'TX01', 'TX02', 'TX05', 'TX08', 'TX09', 'TX10', 'TX12', 'TX13', 'TX14', 'TX15', 'TX16N', 'TX16N2', 'TX17N', 'TX18N', 'TX20', 'TX21', 'TX22', 'VD01', 'VD03', 'VD04', 'VD05', 'VD06', 'VD06A', 'VD08', 'VD11', 'VD12']
// const testList = ['T143', 'BF702', 'GL10', 'BF503', 'T198', 'GL08N', 'VD09', 'ST500', 'VD10', 'ST505', 'ST315N', 'ME604', 'CN402', 'CN401', 'CN402A', 'CN403']

axios.get('https://dc.ria.ru/ips/t/lib/plugin/list.json')
    .then( res => {
        if(res.data.black === undefined || res.data.white === undefined || res.data.test === undefined) {
            alert('Плагин: Возможно ошибка синтаксиса JSON файла')
            return;
        }

        const blackList = res.data.black;
        const whiteList = res.data.white;
        const testList = res.data.test;

        init('.tp-library__tpl-cod', () => { markListElements(blackList, whiteList, testList) } )
        init('.tp-library__search-input', () => { searchForm(blackList, whiteList, testList) } )
    })
    .catch( error => {
        if(error.message === 'Network Error') {
            alert('Плагин: Нет доступа к файлу')
        }
        console.log('>', error)
    })

function init(element, callback) {
    const list = document.querySelectorAll(element);
    if(list.length === 0) {
        console.log('wait', list.length)
        sleep(1000).then( function() {
            init(element, callback)
        })
    }else{
        console.log('loaded', list.length)
        callback()
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function searchForm(blackList, whiteList, testList) {
    const search = document.querySelectorAll('.tp-library__search-input');
    search[0].addEventListener('input', () => {
        setTimeout(() => {
            markListElements(blackList, whiteList, testList)    
        }, 1500);
    })
    console.log('search', search);
}
function markListElements(blackList, whiteList, testList) {
    const list = document.querySelectorAll('.tp-library__tpl-cod');
    console.log('len:', list.length);
    list.forEach(el=>{
        let name = el.innerHTML
        if(blackList.includes(name)) {
            markElement(el, '#e74c3c')
        }else if(whiteList.includes(name)) {
            markElement(el, '#2ecc71')
        }
        if(testList.includes(name)) {
            markElement(el, '#f1c40f')
        }
    })
}

function markElement (el, color) {
    let div = el.closest('.tp-library__tpl-body')
    if(div) {
        // div.style.pointerEvents = 'none' // disable click
        // div.querySelector('.tp-library__tpl-wrapper').style.opacity = '0.1'
        div.style.border = `1px solid ${color}`
        div.style.marginBottom = '1px'
    }
}

