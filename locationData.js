//This is location data file
let DATA = [
    {id:'1', "desc":"Vill Jane will astonish every guest with its breathtaking views", "price":"$400", "total":"$2400","place":"Aspen", "cover":"//training.pyther.com/yara/15-day/02-project-LongStay/001_villa.jpg"},
    {id:'2', "desc":"Brick villa which attracts the viewers with its awesome finishing and mindblowing weather", "price":"$550", "total":"$3300","place":"Prague", "cover":"//training.pyther.com/yara/15-day/02-project-LongStay/002_villa.jpg"},
    {id:'3', "desc":"An ultra exclusive mountain home Ranch-inspired luxury living", "price":"$400", "total":"$2400","place":"Alaska", "cover":"//training.pyther.com/yara/15-day/02-project-LongStay/003_villa.jpg"},
    {id:'4', "desc":"Villa Kalista very famous for its architecture and breathtaking site points around it", "price":"$440", "total":"$2640","place":"Madrid", "cover":"//training.pyther.com/yara/15-day/02-project-LongStay/004_villa.jpg"},
    {id:'5', "desc":"A modern and luxurious villa with its astonsihing swimming pool and cool weather.", "price":"$500", "total":"$3000","place":"Athens", "cover":"//training.pyther.com/yara/15-day/02-project-LongStay/005_villa.jpg"},
    {id:'6', "desc":"An ultra exclusive villa which is suitable for a big family to enjoy their time", "price":"$600", "total":"$3600","place":"Athens", "cover":"//training.pyther.com/yara/15-day/02-project-LongStay/006_villa.jpg"},
    {id:'7', "desc":"A super luxurious villa which attarcts with its interior and pool view", "price":"$480", "total":"$2880","place":"Vienna", "cover":"//training.pyther.com/yara/15-day/02-project-LongStay/007_villa.jpg"},
    {id:'8', "desc":"Villa Preside will never dissapoint the viewers with its mesmerizing room service", "price":"$520", "total":"$3120","place":"Aspen", "cover":"//training.pyther.com/yara/15-day/02-project-LongStay/008_villa.jpg"},
    {id:'9', "desc":"An ultra exclusive villa which is famous with beach side view and its interior.", "price":"$600", "total":"$3600","place":"Alaska", "cover":"//training.pyther.com/yara/15-day/02-project-LongStay/009_villa.jpg"},
    {id:'10', "desc":"A brand new modern Villa which is far from city and near to the experience of heaven with its ultra finishing look", "price":"$700", "total":"$4200","place":"Vienna", "cover":"//training.pyther.com/yara/15-day/02-project-LongStay/010_villa.jpg"}

];


export var getLocations = ()=>{
    return DATA;
}

export var getLocationById = (id) =>{
    var list = DATA.filter((item)=>(item.id==id));
    if(list.length > 0){
        return list[0];
    }else{
        return {}
   }
}

export var getLocationByPlace = (plc) =>{
    var list = DATA.filter((item)=>(item.place==plc));
    if(list.length > 0){
        console.log("the pics list are ",list);
        return list;
    }else{
        return {}
   }
}
