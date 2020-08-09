const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    //inserir dados 

    proffyValue = {
        name:"Diego Fernandes", 
        avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4" ,
        whatsapp: "89987656456", 
        bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
    }

    classValues = {
        subject: 1, 
        cost:"20", 
        // o proffy_id vira pelo BD
    }

    classScheduleValues = [
        // class_id vira pelo BD apos cadastrarmos a aula 
        {
            weekday: 1, 
            time_from: 720, 
            time_to: 1220
        },
        {
            weekday: 0, 
            time_from: 520, 
            time_to: 1220
        }
    ]

  //await createProffy(db, {proffyValue, classValues, classScheduleValues})
    
   //consulta dados inseridos 

   //todos os proffys
   //const selectedProffys = await db.all("SELECT * FROM proffys")
   //console.log(selectedProffys)

    //consulta as classes de determinado prof 
    // trazerr junto os dados do professor
    const selectClassesandProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1
    `)
    //console.log(selectClassesandProffys)

    //o horario que a pessoas trabalhas e de 8h as 18h
    // horario time_from (8h) precisa se menor ou igual ao horario solicitado
    // o time_to preicsa ser acima
    const selectClassesSchedules = await db.all(`
    SELECT class_schedule.*
    FROM class_schedule 
    WHERE class_schedule.class_id = 1
    AND class_schedule.weekday = "0"
    AND class_schedule.time_from <= "1300"
    AND class_schedule.time_to > "1300"
    `)

    console.log(selectClassesSchedules)
})

