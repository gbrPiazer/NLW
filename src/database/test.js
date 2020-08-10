const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    //Inserir dados

    proffyValue = {
        name: 'Gabriel Piazer',
        avatar: 'https://avatars1.githubusercontent.com/u/37197063?s=460&u=4cdf667cfac1ead1ec110ac21baaf9ae5f85f13d&v=4',
        whatsapp: '545454545454',
        bio: 'instrutor de fisica'
    }
    classValue = {
        subject: "4",
        cost: "40.00",
        //proffy_id ira vir pelo db    
    }
    classScheduleValue = [
        //class_id vira pelo db, após vir o cadastramento
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

    await createProffy(db, {proffyValue, classValue, classScheduleValue})

    //consultar os dados inseridos

    // todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //consultar as classes de um determinado professor
    //e trazer junto os dados do professor




    const selectClassesAndProffys = await db.all(`
        SELECT classes.*,proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
   

    //o horario que a pessoa trabalha, exemplo, 8h - 18h
    //o horário do time_from(8h) precisa ser menor ou igual ao horário solicitado
    //o time_to precisa ser acima
    const selectClassesShedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "990"
        AND class_schedule.time_to >= "1220"
    `)    

    console.log(selectClassesShedules)

})