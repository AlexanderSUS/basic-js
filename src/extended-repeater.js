// import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let separator = "**";
  let addsep = '00';
  let plus = "PLLUS";
  let season = "spring, summer, autumn, winter";
  if (arguments.length < 2) {
    return 'Unable to determine the time of year!';
  }
  if (typeof(str) != "string" || season.search(str) == -1) {
    return "Invalid date";
  }
  


  return false;
}
