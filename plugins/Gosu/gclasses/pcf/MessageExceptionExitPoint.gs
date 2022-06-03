package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/exitpoints/MessageExceptionExitPoint.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class MessageExceptionExitPoint extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination () : pcf.api.Destination {
    return __newDestinationForLocation(pcf.MessageExceptionExitPoint, {}, 0)
  }
  
  static function drilldown () : pcf.api.Location {
    return __newDestinationForLocation(pcf.MessageExceptionExitPoint, {}, 0).drilldown()
  }
  
  static function printPage () : pcf.api.Location {
    return __newDestinationForLocation(pcf.MessageExceptionExitPoint, {}, 0).printPage()
  }
  
  static function push () : pcf.api.Location {
    return __newDestinationForLocation(pcf.MessageExceptionExitPoint, {}, 0).push()
  }
  
  
}