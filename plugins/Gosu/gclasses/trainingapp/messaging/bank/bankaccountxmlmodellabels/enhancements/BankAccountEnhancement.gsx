package trainingapp.messaging.bank.bankaccountxmlmodellabels.enhancements

@javax.annotation.Generated("gw.xml.codegen.XmlCodeGenerator")
enhancement BankAccountEnhancement : trainingapp.messaging.bank.bankaccountxmlmodellabels.BankAccount {
  public static function create(object : entity.BankAccount, labels : java.util.Collection<gw.xml.gx.PropertyLabel>) : trainingapp.messaging.bank.bankaccountxmlmodellabels.BankAccount {
    return new trainingapp.messaging.bank.bankaccountxmlmodellabels.BankAccount(object, labels)
  }

  public static function create(object : entity.BankAccount, options : gw.api.gx.GXOptions, labels : java.util.Collection<gw.xml.gx.PropertyLabel>) : trainingapp.messaging.bank.bankaccountxmlmodellabels.BankAccount {
    return new trainingapp.messaging.bank.bankaccountxmlmodellabels.BankAccount(object, options, labels)
  }

  public static function create(object : entity.BankAccount) : trainingapp.messaging.bank.bankaccountxmlmodellabels.BankAccount {
    return new trainingapp.messaging.bank.bankaccountxmlmodellabels.BankAccount(object)
  }

  public static function create(object : entity.BankAccount, options : gw.api.gx.GXOptions) : trainingapp.messaging.bank.bankaccountxmlmodellabels.BankAccount {
    return new trainingapp.messaging.bank.bankaccountxmlmodellabels.BankAccount(object, options)
  }

  public static function create(object : entity.BankAccount, labels : java.util.Collection<gw.xml.gx.PropertyLabel>, throughLabels : java.util.Collection<java.lang.String>) : trainingapp.messaging.bank.bankaccountxmlmodellabels.BankAccount {
    return new trainingapp.messaging.bank.bankaccountxmlmodellabels.BankAccount(object, labels, throughLabels)
  }

  public static function create(object : entity.BankAccount, options : gw.api.gx.GXOptions, labels : java.util.Collection<gw.xml.gx.PropertyLabel>, throughLabels : java.util.Collection<java.lang.String>) : trainingapp.messaging.bank.bankaccountxmlmodellabels.BankAccount {
    return new trainingapp.messaging.bank.bankaccountxmlmodellabels.BankAccount(object, options, labels, throughLabels)
  }

}