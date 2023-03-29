export default function timeSince(date) {

    const now = new Date();

    // parse the date-time string to a Date object
    const datetime = new Date(date);
    
    // calculate the time difference in milliseconds
    const diffInMs = now.getTime() - datetime.getTime();
    
    // convert the time difference to hours or days
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    
    // output the result
    if (diffInDays > 0) {
      return diffInDays + " day ago";
    } else if (diffInHours > 0) {
      return diffInHours + " hour ago";
    } else {
      return "less than an hour ago";
    }
  }