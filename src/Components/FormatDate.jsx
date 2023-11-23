

 function FormatDate(date) {
   let formatedDob = date.split("/");
   formatedDob = moment(date).format("MMMM D YYYY");
   return formatedDob;
 }

export default FormatDate;