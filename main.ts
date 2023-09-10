/**
 * DET ÄR ENKELT ATT GÖRA OM DETTA FRÅN NUMMER TILL STRÄNG ELLER TVÄRT OM!!!!
 * 
 * just nu så är det i nummerformat då det är "svårare"
 */
/**
 * begränsning:
 * 
 * jag har inte avrundat värdet på talet innan e.
 * 
 * så om talet är 1399
 * 
 * blir det 139 även fast 140 hade varit "rätt"
 */
function tiopotens_uträkning (num: number) {
    return convertToText(parseFloat(convertToText(index_tiotal_alla_värden).substr(num, 1)))
}
function uträkning_för (num: number) {
    return convertToText(parseFloat(convertToText(stort_tal).substr(num, 1)))
}
/**
 * Baserat på vilken av Mb så ska olika index visas:
 * 
 * Mb1: första index osv osv
 * 
 *                                     =>
 */
let första_index = ""
let andra_index = ""
let tredje_index = ""
let fjärde_index = ""
let femte_index = ""
let sjätte_index = ""
let index_tiotal_alla_värden = 0
let stort_tal = 0
stort_tal = 130000000
index_tiotal_alla_värden = 1
while (stort_tal > 999 * 10 ** index_tiotal_alla_värden) {
    index_tiotal_alla_värden += 1
}
if (index_tiotal_alla_värden < 10) {
    sjätte_index = tiopotens_uträkning(0)
    femte_index = "e"
    fjärde_index = uträkning_för(3)
    tredje_index = uträkning_för(2)
    andra_index = uträkning_för(1)
    första_index = uträkning_för(0)
} else if (index_tiotal_alla_värden >= 10) {
    sjätte_index = tiopotens_uträkning(1)
    femte_index = tiopotens_uträkning(0)
    fjärde_index = "e"
    tredje_index = uträkning_för(2)
    andra_index = uträkning_för(1)
    första_index = uträkning_för(0)
}
basic.showString(andra_index)
