let data = {}
const p = document.getElementById('display-grade');


Papa.parse("./DS-grades-F22u.csv", {
	download: true,
    encoding: "utf-8",
    complete: function(results) {
        let header = results.data.slice(0, 1)[0];
        let res = results.data.slice(1);

        grades = res.map(item => {
            let grade = {};
            for (i = 0; i < header.length; i++) {
                grade[header[i]] = item[i];
            }
            return grade;
        })

        for (const grade of grades) {
            data[grade[`學號`]]= grade;
        }
	}
})

function display() {
    const id = document.getElementById('student-id').value;
    if (id=="") return;
    // p.innerText = JSON.stringify(data[id]);
    const display = `
    H1: ${data[id].H1}
    H2: ${data[id].H2}
    H3: ${data[id].H3}
    H4: ${data[id].H4}
    H5: ${data[id].H5}
    Mid: ${data[id].Mid}
    Fin: ${data[id].Fin}
    CPE: ${data[id].CPE}
    ATT: ${data[id].ATT}
    Sem: ${data[id].Sem}
    `;
    
    p.innerText = display;
}