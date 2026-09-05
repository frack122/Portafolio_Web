
function ConfigemailJs(){
    const formEl = document.querySelector("#contacto-form")

    if (!formEl){
        console.error("No se encortro esa dicha informacion del formulario");
        return;
    }
     emailjs.init({
            publicKey:"7hbx5XJOUohdnWhhR"
    });
    formEl.addEventListener("submit",async(input)=>{
        input.preventDefault();
        

        const notificacion = document.querySelector("#notificacion");
        console.log("Notificacion :", notificacion)
        const request={
            nombre : input.target.nombre.value,
            correo: input.target.correo.value,
            notificacion: notificacion.value
        };

        var serviceID="service_d1gfbd6";
        var templateId="template_t4fyboo";

        try{
            await emailjs.send(serviceID,templateId,request)

            alert("Gracias su mensaje fue recibido")

            formEl.reset()
        }catch(err){
            console.log(err)
        }
    })
}

ConfigemailJs()