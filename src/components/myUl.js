import PhonePreview from "./phonePreview";

// Ul holding just 4 li
function MyUl(props){
    if (!props.items){
        return "Cargando"
    }
    // let uls = [];
    // let ul = [];
    // for (let i = 0; i<props.items; i++){
    //     if (i % 4 !== 0){
    //         uls.push(ul);
    //         ul = []
    //     }else{
    //         ul.push(props.items[i]);
    //     };
    // };
    // if (ul.length > 0){
    //     uls.push(ul);
    // };
    // return (
    //     {uls.map((ul) =>{
    //         return (
    //             <ul>
    //         {ul.map((li) =>{
    //             return <PhonePreview key={li.id} name={li.name} img={require('../images/'+phone.imageFileName).default}/>}
    //             </ul>
    //         )
    //     })}
    // );
}


export default MyUl;
