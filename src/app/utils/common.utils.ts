// common util functions which can be used in different place in this project

export class CommonUtils {
  
  /** for converting 24hrs to 12hrs */
  public static convert24hrTo12hr(convertTime: string) {
    let offTime = convertTime.split(':');
    offTime[0] = (parseInt(offTime[0]) % 12 == 0) ? '12' : (parseInt(offTime[0]) % 12).toString();
    return offTime.join(':');
  }
}