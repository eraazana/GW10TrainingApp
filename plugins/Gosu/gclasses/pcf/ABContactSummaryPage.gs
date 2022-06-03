package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/ABContact/ABContactSummaryPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ABContactSummaryPage extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (anABContact :  ABContact) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ABContactSummaryPage, {anABContact}, 0)
  }
  
  static function drilldown (anABContact :  ABContact) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ABContactSummaryPage, {anABContact}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (anABContact :  ABContact) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ABContactSummaryPage, {anABContact}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (anABContact :  ABContact) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ABContactSummaryPage, {anABContact}, 0).goInMain()
  }
  
  static function printPage (anABContact :  ABContact) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ABContactSummaryPage, {anABContact}, 0).printPage()
  }
  
  static function push (anABContact :  ABContact) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ABContactSummaryPage, {anABContact}, 0).push()
  }
  
  
}