// ==UserScript==
// @name         Send help
// @namespace    https://ege.sdamgia.ru
// @version      1
// @description  get the right answers
// @author       AtomixFuze
// @match        https://*.sdamgia.ru/test*
// @icon         data:image/gif;base64,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
// @grant        none
// ==/UserScript==

function get_problems() {
    let problems = [];
    for (let input of document.getElementsByClassName('test_inp')) {
        let name = input.getAttribute('name');
        let problem_data = name.split('_');
        if (problem_data.length === 3) {
            problems.push(name);
       }
    }
    return problems;
}

async function get_results(problems, ttest) { // ttest is theme test. requres different method of getting results page
    let test_id = ttest ? '' : document.getElementsByName('test_id')[0].value;
    let hash = document.getElementsByName('hash')[0].value;
    let results = (await fetch('https://ege.sdamgia.ru/test', {
      'headers': {'content-type': 'application/x-www-form-urlencoded'},
      'body': `is_cr=1&hash=${hash}&stat_id=0&timer=0&a=check&test_id=${test_id}&${problems.join("=&")}=`,
      'method': 'POST',
      'mode': 'cors',
      'credentials': 'include'
    }));
    let html = '';
    console.log(results.status, results.ok);
    if (results.ok) {
        html = await results.text();
    } else {
        html = await (await fetch(results.url, {'method': 'GET', 'mode': 'cors', 'credentials': 'include'})).text();
    }
    return html;
}

function parse_answers(html) {
    let answers = {};
    let parser = new DOMParser();
    let doc = parser.parseFromString(html, 'text/html');
    let results = doc.getElementsByClassName('res_table')[0];
    if (!results) return;
    let table_items = results.querySelectorAll('td');
    for (let i = 0; i < table_items.length; i+=5) {
        let td = table_items.item(i);
        let innerText = td.innerText;
        answers[innerText] = table_items.item(i+4).innerText;
    }
    return answers;
}

(async function() {
    let is_theme_test = document.URL.indexOf('ttest') > -1;
    let is_regular_test = document.URL.indexOf('id') > -1;
    if (!(is_theme_test || is_regular_test)) return; // if neither a theme test nor regular test then no help needed
    let output = document.getElementsByName('user')[0];
    output.placeholder = 'getting answers...';
    let problems = get_problems();
    let results = await get_results(problems, is_theme_test);
    let answers = parse_answers(results);
    if (!answers) {
        output.placeholder = 'failed to get answers';
        return;
    }
    for (let problem_name of problems) {
        let input = document.getElementsByName(problem_name)[0];
        let problem_index = problem_name.split('_')[1];
        let answer = answers[problem_index];
        input.onfocus = function() {
            navigator.clipboard.writeText(answer);
        }
        input.onkeyup = function() {
            if($(this).val() == 'sh') {
                $(this).val(answer);
            }
        }
    }
    output.placeholder = 'send help loaded!';
})();
