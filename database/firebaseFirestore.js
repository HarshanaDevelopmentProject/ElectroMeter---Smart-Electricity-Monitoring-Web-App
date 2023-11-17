import {setDoc, doc,getDoc, updateDoc, deleteDoc} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";
import {set,ref,update,remove} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
import {db, realtimedb} from "../environment/fireBaseConfigurationFile.js";

export let firestoreDatabase = {
    saveData: (databaseName, tablePrimaryName) => {
        setDoc(doc(db,  databaseName, tablePrimaryName), {
            projectname: tablePrimaryName,
            date: new Date().getFullYear()+'/'+(new Date().getMonth()+1)+'/'+new Date().getDate(),
            startTime: new Date().toLocaleTimeString(),
        }).then(async () => {
            console.log('saved Project')


        }).catch(() => {
            console.log('error')
        });
    },




    updateData : (dataBaseName, tablePrimaryName ,unit ,cost) => {
        updateDoc(doc(db, dataBaseName, tablePrimaryName ), {
            endTime: new Date().toLocaleTimeString(),
            totalUnit:unit,
            cost:cost,
        }).then(() => {
            console.log('end time send');
            location.href = '../page/dashboard.html'
        }).catch(() => {

        });
    },
    deleteData : (databaseName, tablePrimaryName) => {
        deleteDoc(doc(db, databaseName, tablePrimaryName)).then(() => {
            alert(tablePrimaryName + ' Deleted!!!');
            document.getElementById('last-project-details').style.display = 'none'
            document.getElementById('table-outer').style.display = 'block'
            location.reload();

        }).catch(() => {
            alert("Please try Again");
        });
    }
}

export let realTimeDatabase={
    saveData:(projectName)=>{
      set(ref(realtimedb, projectName),{
         
      }).then(()=>{
          console.log('realTimeDatabase saved');
      }).catch(()=>{
          console.log('realtime database error');
      });
    },

    updateData:(projectName,time,power)=>{
        update(ref(realtimedb,projectName),{
            time:time,
            power:power
        }).then().catch()
    },
    deleteData:(projectName)=>{
      remove(ref(realtimedb,projectName)).then(()=>{

      }).catch(()=>{

      })
    }
}



