package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/ABContact/FlagEntry/FlagEntryPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class FlagEntryPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (aFlagEntry :  FlagEntry) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.FlagEntryPopup, {aFlagEntry}, 0)
  }
  
  static function push (aFlagEntry :  FlagEntry) : pcf.api.Location {
    return __newDestinationForLocation(pcf.FlagEntryPopup, {aFlagEntry}, 0).push()
  }
  
  
}