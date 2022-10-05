$(document).ready(function(){
    
    calculateExperience();
    
});//ready

function calculateExperience(){
        
        var totalLength = $('.total').length;
        const startMonth = new Array(); 
        const startYear = new Array(); 
        const endMonth = new Array(); 
        const endYear = new Array();
        
        const totalYears = new Array();
        const totalMonths = new Array();
        
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth()+1;
        
        const monthsLong = {
          January: '1',
          February: '2',
          March: '3',
          April: '4',
          May: '5',
          June: '6',
          July: '7',
          August: '8',
          September: '9',
          October: '10',
          November: '11',
          December: '12',
        };
        
        for(var i = 0; i <= totalLength; i++){
            startMonth.push(monthsLong[$('.startMonth').eq(i).text()]);
            startYear.push($('.startYear').eq(i).text());
            
            if ($('.endMonth').eq(i).text() == 'Present'){
                endMonth.push(currentMonth);
            } else {
                endMonth.push(monthsLong[$('.endMonth').eq(i).text()]);
            }
            
            if ($('.endYear').eq(i).text() == 'Present'){
                endYear.push(currentYear);
            } else {
                 endYear.push($('.endYear').eq(i).text());
            }
            
            totalYears.push(endYear[i] - startYear[i]);
            totalMonths.push(endMonth[i] - startMonth[i]);
            
            totalMonths[i] = totalMonths[i]+1;
             
            if (totalMonths[i] <= 0){
                totalYears[i] = totalYears[i] - 1;
                totalMonths[i] = 12 + totalMonths[i];
            }
            
            if (totalYears[i] == 0){
                $('.total').eq(i).text(totalMonths[i] + " mos");
            } else{
                $('.total').eq(i).text(totalYears[i] + " yr " + totalMonths[i] + " mos");
            }
        }
        
//        console.log('Start Month: ' + startMonth);
//        console.log('Start Year: ' + startYear);
//        console.log('End Month: ' + endMonth);
//        console.log('End Year: ' + endYear);
//        
//        console.log('Current year is ' + currentYear + ' in month of ' + currentMonth);
//        
//        
//        console.log('Total Years: ' + totalYears);
//        console.log('Total Months: ' + totalMonths);
        
}
