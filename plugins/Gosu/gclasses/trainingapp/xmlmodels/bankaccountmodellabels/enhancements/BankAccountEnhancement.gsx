package trainingapp.xmlmodels.bankaccountmodellabels.enhancements

@javax.annotation.Generated("gw.xml.codegen.XmlCodeGenerator")
enhancement BankAccountEnhancement : trainingapp.xmlmodels.bankaccountmodellabels.BankAccount {
  public static function create(object : entity.BankAccount, labels : java.util.Collection<gw.xml.gx.PropertyLabel>) : trainingapp.xmlmodels.bankaccountmodellabels.BankAccount {
    return new trainingapp.xmlmodels.bankaccountmodellabels.BankAccount(object, labels)
  }

  public static function create(object : entity.BankAccount, options : gw.api.gx.GXOptions, labels : java.util.Collection<gw.xml.gx.PropertyLabel>) : trainingapp.xmlmodels.bankaccountmodellabels.BankAccount {
    return new trainingapp.xmlmodels.bankaccountmodellabels.BankAccount(object, options, labels)
  }

  public static function create(object : entity.BankAccount) : trainingapp.xmlmodels.bankaccountmodellabels.BankAccount {
    return new trainingapp.xmlmodels.bankaccountmodellabels.BankAccount(object)
  }

  public static function create(object : entity.BankAccount, options : gw.api.gx.GXOptions) : trainingapp.xmlmodels.bankaccountmodellabels.BankAccount {
    return new trainingapp.xmlmodels.bankaccountmodellabels.BankAccount(object, options)
  }

  public static function create(object : entity.BankAccount, labels : java.util.Collection<gw.xml.gx.PropertyLabel>, throughLabels : java.util.Collection<java.lang.String>) : trainingapp.xmlmodels.bankaccountmodellabels.BankAccount {
    return new trainingapp.xmlmodels.bankaccountmodellabels.BankAccount(object, labels, throughLabels)
  }

  public static function create(object : entity.BankAccount, options : gw.api.gx.GXOptions, labels : java.util.Collection<gw.xml.gx.PropertyLabel>, throughLabels : java.util.Collection<java.lang.String>) : trainingapp.xmlmodels.bankaccountmodellabels.BankAccount {
    return new trainingapp.xmlmodels.bankaccountmodellabels.BankAccount(object, options, labels, throughLabels)
  }

}