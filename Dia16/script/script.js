document.addEventListener('DOMContentLoaded',()=>{
    const datosContenedor = document.querySelector('.opciones');
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    
    async function fetchData(){
        const res =  await fetch('https://689a16bffed141b96ba1d24e.mockapi.io/api/tareas/Tareas',{
            method: 'GET',
            headers :{
                'Content-Type':'application/json'
            }
        });


        let data = await res.json();
        return data;
    }

    async function addNewTask(){
        const task = taskInput.value;
        console.log(task);
        if (task.trim()==='') return;
        await fetch('https://689a16bffed141b96ba1d24e.mockapi.io/api/tareas/Tareas',{
            method: 'POST',
            headers :{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                task,status: 'On hold'
            })
        });
        taskInput.value='';
        const data = await fetchData();
        displayCapsula(data);
    }

    async function deleteTask(id){
        await fetch(`https://689a16bffed141b96ba1d24e.mockapi.io/api/tareas/Tareas/${id}`,{
            method: 'DELETE',
            headers :{
                'Content-Type':'application/json'
            },
            
        });
        const data = await fetchData();
        displayCapsula(data);
    }
    async function cambioestado(id) {
        const res = await fetch(`https://689a16bffed141b96ba1d24e.mockapi.io/api/tareas/Tareas/${id}`);
        const taskactual = await res.json();
        
        await fetch(`https://689a16bffed141b96ba1d24e.mockapi.io/api/tareas/Tareas/${id}`,{
            method: 'PUT',
            headers :{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({ 
                task: taskactual.task,
                status: 'ready' })
            
            
        });
        const data = await fetchData();
        displayCapsula(data);
        
    }
    async function añadir(id) {
        const tareaDiv = document.querySelector(`img[id="${id}"]`).closest('.capsula, .capsulaNegativa');
        const subtareaDiv = tareaDiv.querySelector('.subtarea');
        subtareaDiv.insertAdjacentHTML('beforeend',`
        
        <div class="boton">
            <input type="text" placeholder="Add a task." id="taskInput-${id}"></input>
            <button id="addTaskButton-${id}">I Got This!</button>
        </div>
        
        `)
        
        const boton= document.getElementById(`addTaskButton-${id}`)
        boton.addEventListener(`click`,async()=>{
            const texto= document.getElementById(`taskInput-${id}`).value.trim();
            if (texto==='') return;
             const res = await fetch(`https://689a16bffed141b96ba1d24e.mockapi.io/api/tareas/Tareas/${id}`);
            const tarea = await res.json();
            const nuevaSubtarea = {
            id: tarea.subtask.length + 1,
            task: texto,
            status: `On hold`
            };
            tarea.subtask.push(nuevaSubtarea)
            //guardarrrr
            await fetch(`https://689a16bffed141b96ba1d24e.mockapi.io/api/tareas/Tareas/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(tarea)
        });
        
        }
        )
        
    }
    async function deleteSubtask(subtaskid) {
    
    subtaskid.pop()
    nuevaSubtarea.push(subtareadelete)
    const data = await fetchData();
    displayCapsula(data);
    }

   
    function displayCapsula(capsula){
        datosContenedor.innerHTML='';
        capsula.forEach(cap =>{
            const capDiv = document.createElement('div');
            if(cap.status==="ready"){
                capDiv.classList.add('capsulaNegativa');
                capDiv.innerHTML +=`
            <div class="caja1">
                <div class="infoTextNegativo">
                <p>${cap["task"]}</p>
                </div>
                
                <div class="botones">
                <div class="mas">
                    <img src="./storage/img/añadir1.svg" id="${cap["id"]}" alt="">
                    </div>
                <div class="terminadoNegativo">
                    <img src="./storage/img/pngwing.com (2).png" id="${cap["id"]}" alt="">
                </div>
                <div class="eliminadoNegativo">
                    <img src="./storage/img/pngwing.com (4).png" id="${cap["id"]}" alt="">
                </div>
                </div>
            </div>
            <div class="subtarea"></div>
                `
            }else if(cap.status==="On hold"){
                capDiv.classList.add('capsula');
                capDiv.innerHTML=`
            <div class="caja1">
                <div class="infoText">
                    <p>${cap["task"]}</p>
                </div>
                <div class="botones">
                    <div class="mas">
                        <img src="./storage/img/añadir1.svg" id="${cap["id"]}" alt="">
                        </div>
                    <div class="terminado">
                        <img src="./storage/img/pngwing.com (2).png" id="${cap["id"]}" alt="">
                    </div>
                    <div class="eliminado">
                        <img src="./storage/img/pngwing.com (4).png" id="${cap["id"]}" alt="">
                    </div>
                </div>
            </div>
            
            <div class="subtarea"></div>

            
            `
            
            }
            const subtareaDiv = capDiv.querySelector('.subtarea');
            if (cap.subtask && cap.subtask.length > 0) {
            cap.subtask.forEach(sub => {
                const capDiv2 = document.createElement('div');
                if(sub.status==="ready"){
                capDiv2.classList.add('capsulaNegativa');
                capDiv2.innerHTML +=`
            <h3 style="display: flex; justify-content: center; background-color: white; color:black;">
            subtareas
            </h3>
            <div class="caja1">
                <div class="infoTextNegativo">
                <p>${sub["task"]}</p>
                </div>

                <div class="botones">
                    <div class="terminadoNegativo">
                        <img src="./storage/img/pngwing.com (2).png" id="${sub["id"]}" alt="">
                    </div>
                    <div class="eliminadoNegativo">
                        <img src="./storage/img/pngwing.com (4).png" id="${sub["id"]}" alt="">
                    </div>
                </div>
            </div>    
                `
            }else if(sub.status==="On hold"){
                capDiv2.classList.add('capsula');
                capDiv2.innerHTML=`
            
            <div class="caja1">
                <div class="infoText">
                    <p>${sub["task"]}</p>
                </div>
                
                <div class="botones">
                    <div class="terminado">
                        <img src="./storage/img/pngwing.com (2).png" id="${sub["id"]}" alt="">
                    </div>
                    <div class="eliminado">
                        <img src="./storage/img/pngwing.com (4).png" id="${sub["id"]}" alt="">
                    </div>
                </div>
            </div>    
                `
            }
            subtareaDiv.appendChild(capDiv2);
            const botoneliminar2 = capDiv2.querySelector('.eliminado, .eliminadoNegativo');
            botoneliminar2.addEventListener('click',() => deleteSubtask( sub.id));
            });
            }
            datosContenedor.appendChild(capDiv);
            const botoneliminar = capDiv.querySelector('.eliminado, .eliminadoNegativo');
            botoneliminar.addEventListener('click', () => deleteTask(cap.id));
            const botonbien = capDiv.querySelector('.terminado, .terminadoNegativo');
            botonbien.addEventListener('click', () => cambioestado(cap.id));
            const botonañadir =capDiv.querySelector(`.mas`);
            botonañadir.addEventListener(`click`, ()=>añadir(cap.id));
        });
    }
    fetchData().then(data =>{
        displayCapsula(data);
    
    });
    

    addTaskButton.addEventListener('click', addNewTask);
    
});
