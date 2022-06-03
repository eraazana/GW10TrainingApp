package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/ResetPrimaryPhoneWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ResetPrimaryPhoneWorksheet extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (anABPerson :  ABPerson) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ResetPrimaryPhoneWorksheet, {anABPerson}, 0)
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInWorkspace (anABPerson :  ABPerson) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ResetPrimaryPhoneWorksheet, {anABPerson}, 0).goInWorkspace()
  }
  
  static function push (anABPerson :  ABPerson) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ResetPrimaryPhoneWorksheet, {anABPerson}, 0).push()
  }
  
  
}