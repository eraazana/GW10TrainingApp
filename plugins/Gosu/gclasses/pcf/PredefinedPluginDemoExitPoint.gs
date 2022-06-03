package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/exitpoints/PredefinedPluginDemoExitPoint.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class PredefinedPluginDemoExitPoint extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination () : pcf.api.Destination {
    return __newDestinationForLocation(pcf.PredefinedPluginDemoExitPoint, {}, 0)
  }
  
  static function drilldown () : pcf.api.Location {
    return __newDestinationForLocation(pcf.PredefinedPluginDemoExitPoint, {}, 0).drilldown()
  }
  
  static function printPage () : pcf.api.Location {
    return __newDestinationForLocation(pcf.PredefinedPluginDemoExitPoint, {}, 0).printPage()
  }
  
  static function push () : pcf.api.Location {
    return __newDestinationForLocation(pcf.PredefinedPluginDemoExitPoint, {}, 0).push()
  }
  
  
}