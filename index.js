
    
const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery)
const API = { 
        key: "e4df0be6080b46679100abb40ef4b713",
        // base:"http://api.openweathermap.org/geo/1.0/zip?zip="
    };
    
function setQuery(evt) { 
    if (evt.keyCode == 13) { 
        getResults(searchbox.value);
      
function getResults (zip) {
    fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${zip},US&appid=${API.key}`)
        .then((response) => response.json())
        .then((json) => {
            let lat = json.lat;
            let lon = json.lon;
            let cityName = json.name;
            document.querySelector('.city').innerHTML = cityName
            // console.log(json)
            // console.log(lat, ' ', lon);

        fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${API.key}`)
            .then((response) => response.json())
            .then((json) => {
            // console.log(json)
            let state = json[0].state
            
            document.querySelector('.state').innerHTML = state
            });
            
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API.key}&units=imperial`)
            .then((response) => response.json())
            .then((json) => {
                
                let high = Math.round(json.daily[0].temp.max)
                let low = Math.round(json.daily[0].temp.min)
                let humidity = json.current.humidity
                let newHumidity =`${humidity}%`
                let highLow = `${high}°F / ${low}°F`
                let currentTemp = Math.round(json.current.temp)
                let newcurrentTemp =`${currentTemp}°F`
                let weatherImg = json.current.weather[0].icon
                let weatherDesc = json.current.weather[0].description
                
                let iconLink = `https://openweathermap.org/img/wn/${weatherImg}@2x.png`
                let mainIcon = document.querySelector(".main-w-icon")
                mainIcon.src = iconLink
                console.log(json); 

                document.querySelector('.description').innerHTML= weatherDesc
                document.querySelector('.humidity').innerHTML =newHumidity
                document.querySelector('#highlow').innerHTML = highLow
                document.querySelector('#curtemp').innerHTML = newcurrentTemp  
                
                let currentTime = String(new Date());

                let sliceCurrentTime = currentTime.slice(0,15)
                
                console.log(sliceCurrentTime)
                
                let monthAbbrev = sliceCurrentTime.slice(4,7)
                let day = sliceCurrentTime.slice(8,10)
                let year = sliceCurrentTime.slice(11, 15)
                let dayOfWeek = sliceCurrentTime.slice(0,3)

                /////////month code /////////
                if (monthAbbrev == "Jan") {
                    month = "January"}
                else if (monthAbbrev == "Feb") {
                    month = "February"}
                else if (monthAbbrev == "Mar") {
                    month = "March"}
                else if (monthAbbrev == "Apr") {
                    month = "April"}
                else if (monthAbbrev == "May") {
                    month = "May"}
                else if (monthAbbrev == "Jun") {
                    month = "June"}
                else if (monthAbbrev == "Jul") {
                    month = "July"}
                else if (monthAbbrev == "Sep") {
                    month = "September"}
                else if (monthAbbrev == "Oct") {
                    month = "October"}
                else if (monthAbbrev == "Nov") {
                    month = "November"}
                else if (monthAbbrev == "Dec") {
                    month = "December"}
                /////////month code /////////
                
                /////////future weather//////
                /////////day code ///////////
                
                abbrevDays = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"
                ]

                array = ["Monday", "Tuesday" , "Wednesday" , "Thursday", "Friday" , "Saturday", "Sunday"]

                todayIndex = abbrevDays.indexOf(dayOfWeek) // 1
                let today = array[todayIndex]

                //////////////day one///////
                ///day///
                
                let dayOneIndex 

                if (todayIndex == 6) {
                    
                    dayOneIndex = 0
                } else {
                    dayOneIndex = todayIndex + 1
                }

                let dayOne = array[dayOneIndex]

                ///weather///
                let dayOneHigh = Math.round(json.daily[1].temp.max)
                let dayOneLow = Math.round(json.daily[1].temp.min)
                let dayOneHighLow = `Hi ${dayOneHigh}°F / Lo ${dayOneLow}°F`
                let dayOneImg = json.daily[1].weather[0].icon
                    let iconLinkDay1 = `https://openweathermap.org/img/wn/${dayOneImg}@2x.png`
                    let mainIconDay1 = document.querySelector(".w-icon-1")
                    mainIconDay1.src = iconLinkDay1
                
                document.querySelector('.high-low-tomorrow').innerHTML = dayOneHighLow
                
                //////////////day two///////
                ///day///
                let dayTwoIndex

                if (dayOneIndex == 6) {
                    
                    dayTwoIndex = 0 //0
                } else {
                    
                    dayTwoIndex = dayOneIndex + 1 // 6
                }

                let dayTwo = array[dayTwoIndex]
                ///weather///
                let dayTwoHigh = Math.round(json.daily[2].temp.max)
                let dayTwoLow = Math.round(json.daily[2].temp.min)
                let dayTwoHighLow = `Hi ${dayTwoHigh}°F / Lo ${dayTwoLow}°F`
                let dayTwoImg = json.daily[2].weather[0].icon
                let iconLinkDay2 = `https://openweathermap.org/img/wn/${dayTwoImg}@2x.png`
                let mainIconDay2 = document.querySelector(".w-icon-2")
                mainIconDay2.src = iconLinkDay2
                
                document.querySelector('.high-low-day-two').innerHTML = dayTwoHighLow

                ////////////////day 3
                ///day
                let dayThreeIndex

                if (dayTwoIndex == 6) {
                    
                    dayThreeIndex = 0
                } else {
                
                    dayThreeIndex = dayTwoIndex + 1
                }
                
                let dayThree = array[dayThreeIndex]
                ///weather
                let dayThreeHigh = Math.round(json.daily[3].temp.max)
                let dayThreeLow = Math.round(json.daily[3].temp.min)
                let dayThreeHighLow = `Hi ${dayThreeHigh}°F / Lo ${dayThreeLow}°F`
                let dayThreeImg = json.daily[3].weather[0].icon
                let iconLinkDay3 = `https://openweathermap.org/img/wn/${dayThreeImg}@2x.png`
                let mainIconDay3 = document.querySelector(".w-icon-3")
                mainIconDay3.src = iconLinkDay3
                

                document.querySelector('.high-low-day-three').innerHTML = dayThreeHighLow
                
                /////////day code ///////////
                
                
                
                
                let fullDate = `${today} ${month} ${day}, ${year}`
                document.querySelector('.date').innerHTML= fullDate

                //////code to fill in next 3 days of week//////
                document.querySelector('.one-day').innerHTML= dayOne
                document.querySelector('.two-day').innerHTML= dayTwo
                document.querySelector('.three-day').innerHTML= dayThree
                
        })})}
    }}


    const searchboxx = document.querySelector('.search-boxx');
    searchboxx.addEventListener('keypress', setQueryx)
    // const API = { 
    //         key: "e4df0be6080b46679100abb40ef4b713",
    //         // base:"http://api.openweathermap.org/geo/1.0/zip?zip="
    //     };
        
    function setQueryx(evt) { 
        if (evt.keyCode == 13) { 
            getResults(searchboxx.value);
          
    function getResults (cityState) {
        let commaIndex = cityState.indexOf(',')
        console.log(commaIndex)
        let city = cityState.slice(0,commaIndex)
        let state = cityState.slice(cityState.length - 2)
        console.log(city)
        console.log(state)
    


        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},US&appid=${API.key}`)
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                let lat = json[0].lat;
                let lon = json[0].lon;
                // let cityName = json.name;
                document.querySelector('.city').innerHTML = city
                // console.log(json)
                console.log(lat, ' ', lon);
    

                
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API.key}&units=imperial`)
                .then((response) => response.json())
                .then((json) => {
                    console.log(json)
                    let high = Math.round(json.daily[0].temp.max)
                    let low = Math.round(json.daily[0].temp.min)
                    let humidity = json.current.humidity
                    let newHumidity =`${humidity}%`
                    let highLow = `${high}°F / ${low}°F`
                    let currentTemp = Math.round(json.current.temp)
                    let newcurrentTemp =`${currentTemp}°F`
                    let weatherImg = json.current.weather[0].icon
                    let weatherDesc = json.current.weather[0].description
                    
                    let iconLink = `https://openweathermap.org/img/wn/${weatherImg}@2x.png`
                    let mainIcon = document.querySelector(".main-w-icon")
                    mainIcon.src = iconLink
                    document.querySelector('.description').innerHTML= weatherDesc
                    document.querySelector('.humidity').innerHTML =newHumidity
                    document.querySelector('#highlow').innerHTML = highLow
                    document.querySelector('#curtemp').innerHTML = newcurrentTemp  
                    
                    let currentTime = String(new Date());
    
                    let sliceCurrentTime = currentTime.slice(0,15)
                    
                    console.log(sliceCurrentTime)
                    
                    let monthAbbrev = sliceCurrentTime.slice(4,7)
                    let day = sliceCurrentTime.slice(8,10)
                    let year = sliceCurrentTime.slice(11, 15)
                    let dayOfWeek = sliceCurrentTime.slice(0,3)
    
                    /////////month code /////////
                    if (monthAbbrev == "Jan") {
                        month = "January"}
                    else if (monthAbbrev == "Feb") {
                        month = "February"}
                    else if (monthAbbrev == "Mar") {
                        month = "March"}
                    else if (monthAbbrev == "Apr") {
                        month = "April"}
                    else if (monthAbbrev == "May") {
                        month = "May"}
                    else if (monthAbbrev == "Jun") {
                        month = "June"}
                    else if (monthAbbrev == "Jul") {
                        month = "July"}
                    else if (monthAbbrev == "Sep") {
                        month = "September"}
                    else if (monthAbbrev == "Oct") {
                        month = "October"}
                    else if (monthAbbrev == "Nov") {
                        month = "November"}
                    else if (monthAbbrev == "Dec") {
                        month = "December"}
                    /////////month code /////////
                    
                    /////////future weather//////
                    /////////day code ///////////
                    
                    abbrevDays = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"
                    ]
    
                    array = ["Monday", "Tuesday" , "Wednesday" , "Thursday", "Friday" , "Saturday", "Sunday"]
    
                    todayIndex = abbrevDays.indexOf(dayOfWeek) // 1
                    let today = array[todayIndex]
    
                    //////////////day one///////
                    ///day///
                    
                    let dayOneIndex 
    
                    if (todayIndex == 6) {
                        
                        dayOneIndex = 0
                    } else {
                        dayOneIndex = todayIndex + 1
                    }
    
                    let dayOne = array[dayOneIndex]
    
                    ///weather///
                    let dayOneHigh = Math.round(json.daily[1].temp.max)
                    let dayOneLow = Math.round(json.daily[1].temp.min)
                    let dayOneHighLow = `Hi ${dayOneHigh}°F / Lo ${dayOneLow}°F`
                    let dayOneImg = json.daily[1].weather[0].icon
                    let iconLinkDay1 = `https://openweathermap.org/img/wn/${dayOneImg}@2x.png`
                    let mainIconDay1 = document.querySelector(".w-icon-1")
                    mainIconDay1.src = iconLinkDay1
                    console.log(dayOneImg)
                    // document.
                    document.querySelector('.high-low-tomorrow').innerHTML = dayOneHighLow
                    
                    //////////////day two///////
                    ///day///
                    let dayTwoIndex
    
                    if (dayOneIndex == 6) {
                        
                        dayTwoIndex = 0 //0
                    } else {
                        
                        dayTwoIndex = dayOneIndex + 1 // 6
                    }
    
                    let dayTwo = array[dayTwoIndex]
                    ///weather///
                    let dayTwoHigh = Math.round(json.daily[2].temp.max)
                    let dayTwoLow = Math.round(json.daily[2].temp.min)
                    let dayTwoHighLow = `Hi ${dayTwoHigh}°F / Lo ${dayTwoLow}°F`
                    let dayTwoImg = json.daily[2].weather[0].icon
                    let iconLinkDay2 = `https://openweathermap.org/img/wn/${dayTwoImg}@2x.png`
                    let mainIconDay2 = document.querySelector(".w-icon-2")
                    mainIconDay2.src = iconLinkDay2
                    
                    document.querySelector('.high-low-day-two').innerHTML = dayTwoHighLow
    
                    ////////////////day 3
                    ///day
                    let dayThreeIndex
    
                    if (dayTwoIndex == 6) {
                        
                        dayThreeIndex = 0
                    } else {
                    
                        dayThreeIndex = dayTwoIndex + 1
                    }
                    
                    let dayThree = array[dayThreeIndex]
                    ///weather
                    let dayThreeHigh = Math.round(json.daily[3].temp.max)
                    let dayThreeLow = Math.round(json.daily[3].temp.min)
                    let dayThreeHighLow = `Hi ${dayThreeHigh}°F / Lo ${dayThreeLow}°F`
                    let dayThreeImg = json.daily[3].weather[0].icon
                    let iconLinkDay3 = `https://openweathermap.org/img/wn/${dayThreeImg}@2x.png`
                    let mainIconDay3 = document.querySelector(".w-icon-3")
                    mainIconDay3.src = iconLinkDay3
    
                    document.querySelector('.high-low-day-three').innerHTML = dayThreeHighLow
                    
                    /////////day code ///////////
                    
                    
                    
                    
                    let fullDate = `${today} ${month} ${day}, ${year}`
                    document.querySelector('.date').innerHTML= fullDate
    
                    //////code to fill in next 3 days of week//////
                    document.querySelector('.one-day').innerHTML= dayOne
                    document.querySelector('.two-day').innerHTML= dayTwo
                    document.querySelector('.three-day').innerHTML= dayThree
                    
            })})}
        }}









