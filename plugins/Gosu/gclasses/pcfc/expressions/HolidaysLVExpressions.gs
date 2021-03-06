package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/holidays/HolidaysLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class HolidaysLVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/holidays/HolidaysLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class HolidaysLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at HolidaysLV.pcf: line 29, column 33
    function sortValue_0 (Holiday :  entity.Holiday) : java.lang.Object {
      return Holiday.Name
    }
    
    // 'value' attribute on DateCell (id=Date_Cell) at HolidaysLV.pcf: line 34, column 43
    function sortValue_1 (Holiday :  entity.Holiday) : java.lang.Object {
      return Holiday.OccurrenceDate
    }
    
    // 'value' attribute on RowIterator at HolidaysLV.pcf: line 21, column 74
    function value_16 () : gw.api.database.IQueryBeanResult<entity.Holiday> {
      return HolidayList
    }
    
    property get HolidayList () : gw.api.database.IQueryBeanResult<Holiday> {
      return getRequireValue("HolidayList", 0) as gw.api.database.IQueryBeanResult<Holiday>
    }
    
    property set HolidayList ($arg :  gw.api.database.IQueryBeanResult<Holiday>) {
      setRequireValue("HolidayList", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/holidays/HolidaysLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends HolidaysLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at HolidaysLV.pcf: line 29, column 33
    function action_2 () : void {
      HolidayDetail.go(Holiday)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at HolidaysLV.pcf: line 29, column 33
    function action_dest_3 () : pcf.api.Destination {
      return pcf.HolidayDetail.createDestination(Holiday)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at HolidaysLV.pcf: line 29, column 33
    function valueRoot_5 () : java.lang.Object {
      return Holiday
    }
    
    // 'value' attribute on TextCell (id=Zones_Cell) at HolidaysLV.pcf: line 39, column 34
    function value_10 () : java.lang.String {
      return Holiday.Zones
    }
    
    // 'value' attribute on TextCell (id=Tags_Cell) at HolidaysLV.pcf: line 44, column 39
    function value_13 () : java.lang.String {
      return Holiday.TagsString
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at HolidaysLV.pcf: line 29, column 33
    function value_4 () : java.lang.String {
      return Holiday.Name
    }
    
    // 'value' attribute on DateCell (id=Date_Cell) at HolidaysLV.pcf: line 34, column 43
    function value_7 () : java.util.Date {
      return Holiday.OccurrenceDate
    }
    
    property get Holiday () : entity.Holiday {
      return getIteratedValue(1) as entity.Holiday
    }
    
    
  }
  
  
}