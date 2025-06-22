const colleges = {
    tamilnadu: {
        coimbatore: [
            {
                name: "Ramakrishna College of Arts and Science",
                course: "bsc_cs",
                mapLink: "https://www.google.com/maps/search/sri+ramakrishna+college+of+arts+and+science/@11.0223875,76.9798079,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MDgyMy4wIKXMDSoASAFQAw%3D%3D"
            },
            {
                name: "PSG College of Arts and Science",
                course: "bsc_cs",
                mapLink: "https://www.google.com/maps/place/PSG+College+of+Arts+and+Science/@11.032905,77.0322272,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba858526b5c0591:0x6c452206816788d4!8m2!3d11.032905!4d77.0348075!16s%2Fm%2F025w14x?entry=ttu&g_ep=EgoyMDI0MDgyMy4wIKXMDSoASAFQAw%3D%3D"
            },
            {
                name: "KPR College of Arts and Science",
                course: "bsc_ai_ds",
                mapLink: "https://www.google.co.in/maps/place/KPR+College+of+Arts+Science+and+Research/@11.0805985,77.0654974,12z/data=!4m10!1m2!2m1!1skpr!3m6!1s0x3ba8ff39cc24b9ab:0x2ae19c385129a1b5!8m2!3d11.0805985!4d77.1355352!15sCgNrcHJaBSIDa3BykgEPcHJpdmF0ZV9jb2xsZWdlmgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVU50TjNKeU56Sm5SUkFC4AEA!16s%2Fg%2F11h7s08zt4?entry=ttu&g_ep=EgoyMDI0MDgyNi4wIKXMDSoASAFQAw%3D%3D"
            },
            {
                name: "Krishna College of Technology",
                course: "bsc_ai_ds",
                mapLink: "https://www.google.com/maps/place/Sri+Krishna+College+of+Engineering+and+Technology+-+SKCET/@10.937937,76.9557201,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba85bb22369d571:0x72cc0bed93b5b2b6!8m2!3d10.937937!4d76.9583004!16zL20vMDhkcDR5?entry=ttu&g_ep=EgoyMDI0MDgyMy4wIKXMDSoASAFQAw%3D%3D"
            },
            {
                name: "Hindusthan College of Arts and Science",
                course: "bsc_ai_ds",
                mapLink: "https://www.google.com/maps/place/Hindusthan+College+of+Arts+and+Science"
            }
        ],
        chennai: [
            {
                name: "Loyola College",
                course: "bsc_cs",
                mapLink: "https://www.google.com/maps/place/Loyola+College"
            }
        ]
    },
    karnataka: {
        bangalore: [
            {
                name: "Christ University",
                course: "bsc_cs",
                mapLink: "https://www.google.com/maps/place/Christ+University"
            },
            {
                name: "St. Joseph's College",
                course: "bsc_math",
                mapLink: "https://www.google.com/maps/place/St.+Joseph's+College"
            }
        ]
    },
    maharashtra: {
        mumbai: [
            {
                name: "St. Xavier's College",
                course: "bsc_cs",
                mapLink: "https://www.google.com/maps/place/St.+Xavier's+College"
            },
            {
                name: "Mumbai University",
                course: "bsc_math",
                mapLink: "https://www.google.com/maps/place/Mumbai+University"
            }
        ]
    }
};

function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        course: params.get('course'),
        state: params.get('state'),
        district: params.get('district')
    };
}

function displayColleges() {
    const { course, state, district } = getQueryParams();
    const collegeList = document.getElementById('collegeList');
    const filteredColleges = colleges[state]?.[district]?.filter(college => college.course === course) || [];

    if (filteredColleges.length > 0) {
        filteredColleges.forEach(college => {
            const collegeDiv = document.createElement('div');
            collegeDiv.className = 'college';
            collegeDiv.innerHTML = `<strong>${college.name}</strong>`;
            collegeDiv.addEventListener('click', () => {
                window.open(college.mapLink, '_blank');
            });
            collegeList.appendChild(collegeDiv);
        });
    } else {
        collegeList.innerHTML = "<p>No colleges found for the selected course and location.</p>";
    }
}

document.addEventListener('DOMContentLoaded', displayColleges);
