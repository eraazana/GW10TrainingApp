package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses gw.api.database.QuerySelectColumns
uses gw.api.path.Paths
uses gw.api.database.IQuerySelectColumn
@javax.annotation.Generated("config/web/pcf/training/integration/ExchangeRateLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ExchangeRateLVExpressions {
  @javax.annotation.Generated("config/web/pcf/training/integration/ExchangeRateLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ExchangeRateLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on DateCell (id=RetrievedOn_Cell) at ExchangeRateLV.pcf: line 19, column 51
    function sortValue_0 (currentExchangeRate :  ExchangeRate) : java.lang.Object {
      return currentExchangeRate.CreateTime
    }
    
    // 'value' attribute on TypeKeyCell (id=BaseCurrency_Cell) at ExchangeRateLV.pcf: line 24, column 41
    function sortValue_1 (currentExchangeRate :  ExchangeRate) : java.lang.Object {
      return currentExchangeRate.BaseCurrency
    }
    
    // 'value' attribute on TypeKeyCell (id=PriceCurrency_Cell) at ExchangeRateLV.pcf: line 29, column 41
    function sortValue_2 (currentExchangeRate :  ExchangeRate) : java.lang.Object {
      return currentExchangeRate.PriceCurrency
    }
    
    // 'value' attribute on RowIterator at ExchangeRateLV.pcf: line 12, column 72
    function value_15 () : gw.api.database.IQueryBeanResult<ExchangeRate> {
      return queryExchangeRates()
    }
    
    
    
    function queryExchangeRates () : gw.api.database.IQueryBeanResult<entity.ExchangeRate> {
    
      var rateSetQuery = gw.api.database.Query.make(ExchangeRateSet)
      var rateSetResult = rateSetQuery.select()
      var mostRecentSet = rateSetResult.orderByDescending(QuerySelectColumns.path(Paths.make(ExchangeRateSet#CreateTime))).FirstResult.ID
    
      var rateQuery = gw.api.database.Query.make(ExchangeRate)
      rateQuery.compare(ExchangeRate#ExchangeRateSet, Equals, mostRecentSet)
      var rateQueryResult = rateQuery.select()
      rateQueryResult.thenBy(QuerySelectColumns.path(Paths.make(ExchangeRate#BaseCurrency)))
      rateQueryResult.thenBy(QuerySelectColumns.path(Paths.make(ExchangeRate#PriceCurrency)))
      return rateQueryResult
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/training/integration/ExchangeRateLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ExchangeRateLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on DateCell (id=RetrievedOn_Cell) at ExchangeRateLV.pcf: line 19, column 51
    function valueRoot_4 () : java.lang.Object {
      return currentExchangeRate
    }
    
    // 'value' attribute on TextCell (id=Rate_Cell) at ExchangeRateLV.pcf: line 35, column 45
    function value_12 () : java.math.BigDecimal {
      return currentExchangeRate.Rate
    }
    
    // 'value' attribute on DateCell (id=RetrievedOn_Cell) at ExchangeRateLV.pcf: line 19, column 51
    function value_3 () : java.util.Date {
      return currentExchangeRate.CreateTime
    }
    
    // 'value' attribute on TypeKeyCell (id=BaseCurrency_Cell) at ExchangeRateLV.pcf: line 24, column 41
    function value_6 () : typekey.Currency {
      return currentExchangeRate.BaseCurrency
    }
    
    // 'value' attribute on TypeKeyCell (id=PriceCurrency_Cell) at ExchangeRateLV.pcf: line 29, column 41
    function value_9 () : typekey.Currency {
      return currentExchangeRate.PriceCurrency
    }
    
    property get currentExchangeRate () : ExchangeRate {
      return getIteratedValue(1) as ExchangeRate
    }
    
    
  }
  
  
}