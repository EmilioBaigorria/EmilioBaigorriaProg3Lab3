//Ejer2
console.log("¡Hola mundo desde typeScript!")
//Ejer 3
{
    let pName: string="Emilio"
    let value: number=12
    let real: boolean=true
    let fecha: Date=new Date()

    const ejer3Div=document.getElementById("ejer3Variables")

    if(ejer3Div){
        ejer3Div.innerHTML=`<p>Texto:${pName}</p>
        <p>Numero:${value}</p>
        <p>Boolean:${real}</p>
        <p>Fecha:${fecha}</p>`
    }
}
//Ejer4
{
    let value:number=696
    const ejer4NumToStr=document.getElementById("ejer4NumToStr")

    if(ejer4NumToStr){
        ejer4NumToStr.innerHTML=`Numero convertido a cadena: ${value.toString()}`
    }
}
//Ejer5
{
    let numArray: number[]=[3,5,7,3,7]
    let finalValue:number=0
    
    numArray.forEach(i => {
        finalValue=finalValue+i
    });

    const ejer5ArraySum=document.getElementById("ejer5ArraySum")
    if(ejer5ArraySum){
        ejer5ArraySum.innerHTML=`Suma de array: ${finalValue}`
    }
}
//Ejer6
{
    let student={
        name: "Emilio",
        age: 22,
        course: "Programacion"
    }
    const ejer6Object=document.getElementById("ejer6Object")
    if(ejer6Object){
        ejer6Object.innerHTML=`Nombre:${student.name}<br>Edad:${student.age}<br>Curso:${student.course}`
    }
}
//Ejer 7
{
    type address={
        street:string,
        city:string,
        cp:number
    }
    let simpAddress:address={
        street:"Avenida Siempreviva",
        city:"Springfield",
        cp:2264
    }
    const ejer7Type=document.getElementById("ejer7Type")
    if(ejer7Type){
        ejer7Type.innerHTML=`Calle:${simpAddress.street}<br>Ciudad:${simpAddress.city}<br>CodigoPostal:${simpAddress.cp}`
    }

}
//Ejer8
{
    interface user{
        name:string,
        email:string,
        sayHello():void
    }
    const user : user ={
        name :"Asa",
        email:"ilovechainsaws@gmail.com",
        sayHello() {
            const ejer8Int=document.getElementById("ejer8Int")
            if(ejer8Int){
                ejer8Int.innerHTML=`Hola mi nombre es ${this.name}`
            }
        }
    }
    user.sayHello()
}
//Ejer9
{
    class person{
        name:string
        age:number
        constructor(name:string,age:number){
            this.name=name
            this.age=age
        }
        presentMyself() {
            const ejer9Clss=document.getElementById("ejer9Clss")
            if(ejer9Clss){
                ejer9Clss.innerHTML=`Hola, mi nombre es ${this.name} y tengo ${this.age} años`
            }
        }
    }
    const p1=new person("Emilio",23)
    p1.presentMyself()
}
//Ejer10
{
    class generic<T>{
        value: T
        constructor(value:T){
            this.value=value
        }
        showValue(){
            const ejer10ClssGn=document.getElementById("ejer10ClssGn")
            if(ejer10ClssGn){
                let box=document.createElement("li")
                box.innerHTML=`Contenido de la caja del tipo ${typeof this.value}:${this.value}` 
                ejer10ClssGn.appendChild(box)
            }
        }
    }
    let g1=new generic<string>("La balada de bala")
    g1.showValue()
    let g2=new generic<number>(14)
    g2.showValue()
}
//Ejer 11
{
    function identidad<T>(value : T){
        const ejer11Iden=document.getElementById("ejer11Iden")
        if(ejer11Iden){
            let liElement=document.createElement("li")
            liElement.innerHTML=`Identiad del valor de tipo ${typeof value}:${value}` 
            ejer11Iden.appendChild(liElement)
        }
    }
    identidad<string>("Ts>>>Js")
    identidad<number>(823)
}
//Ejer12
{
    enum colors{
        rojo="Rojo",
        azul="Azul",
        morado="Morado",
        celeste="Celeste",
        verde="Verde",
        naranja="Naranja",
    }
    let favColor :colors=colors.naranja
    const ejer12Enum=document.getElementById("ejer12Enum")
    if(ejer12Enum){
        ejer12Enum.innerHTML=`Mi color favorito es: ${favColor}`
    }

    
}

