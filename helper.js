// ==UserScript==
// @name         Send help
// @namespace    https://ege.sdamgia.ru
// @version      1
// @description  get the right answers
// @author       AtomixFuze
// @match        https://*.sdamgia.ru/test*
// @icon         data:image/gif;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCABAAEADAREAAhEBAxEB/8QAHAAAAgMBAAMAAAAAAAAAAAAABgcEBQgDAAEJ/8QAMhAAAQMDAgQEBgEEAwAAAAAAAQIDBAAFEQYSBxMhMQgiQVEUMkJhgZEVFnGhwSQz4f/EABsBAAIDAQEBAAAAAAAAAAAAAAQFAQMGAAIH/8QAJhEAAgIBBAMAAgIDAAAAAAAAAQIAAxEEBRIhEzFBIjIUJENRcf/aAAwDAQACEQMRAD8AbnxDnosimUYTo08sKB3n+xqf+zpzn6rERvZFiCa6kkOYfQ2lsDuVFR9Mis3rd3TTP46xkxtptua4ZPQgS94idKQl3ZLlzS+becu8lknIyRtTjOTkdzgUrG9aon9eozbZFH2AqPGxpJc47oktMfbgAN5UVUaNz1P0dSo7TUPsL9D+KbRWs7k3BCpdtfc6Nqlt4Qs+2R2o6rck/wAsCt2tk7QxtLlMyWULYWlxtQylaDkGnVdiWryUxOylThvchrkkEgA4HrVnUiehbik/KT96ieoN3zVlts7pZXMbbdO5O45KUKA6hWPWs1ue5pQpqQ/lGuj0bXMGI6mGeOcyVGv78y13+dIZkOKK2itYHfPTPp17VnNIwv7sXua5lausYiVev8l115a5D4UsYUoK+b7H3p0tSjoDqLm1DmT7VfXU2wthoJdSrKXcdTVFiYME8jMe5f6XvFxjPJ5y1GKlJyrvtoa5UI69wgEj7NReGbi+td/jaccmKlW+V5W23eqmnMdwfY+1F7fc9D8T6i7W1q68vs0+8ys9EpV3rZg9ZiD3Cx9QcCVsoV29E10mZU8RjcXhw3FU3LkOOXFbpKHcBKFbs7gR1z1/NfNdw0mdSTN1tbcqcmJiBw/b1XAalXR9xbLnnS2Tg/mraKiPUuv1HMcBLu3cBdHTuhjKCx6hw96bAH6YiYkHEL9O8CNHWp0FdvRJX6BwkgVaKQT3K8n5DB3hnpd2EtsWaIlJTt8rYBon+LWZILRHaU0inhzx8symlgwzPRtHskn/ANpUR47QJ6t7rOZvxQznykn3xW0X9RM5LltEkKVtSgJPXzK7fqvfuUcpjLxxW91y/wCn96HC0lCjvSPKVFQ6D9Vi9wyt2Ztduf8Ar4EDmJMi3WKI021zHeWDhStqR09TQtbALIUZYyLZ9cT7fIW4WochtsjmBlS/Lntk4x1xRanAzIYKTGnZdRqvsP4qEzlSBlSSe1FK+ZTxEjx+Isx2U5FDcJXLUEOY3+Untk+matRiDmcFH2dbDoBWvuMFmW7/AMdiOx8ZISOpOxQAAP3JFDvXzuDfIPc+EM1TGYdcC9uwhKiME4NahO1EQGeWh90EozuyOgUatPQg4A+zNPieuEu937+CuDTLcNjY/GWEZUSR1Vu9s5GKxW7WP5QMdT6nsu1VajQG6tvy/wBRd3S3oYS2w+oKCUJzt7EY70FVj7ELZVjK534Nhl5qLHQ3zscxwj5sdqMVsDErFZzkwx4WzYsVyW0p9oIAwsFY6UTWQTIdXhxFsttjvuusssqS6QVHaMn2zTNQpGZQQZP05bfjdfWt2GHI8hGDz2zgBCVZWk/YiqeObBiSwHhblHzGfLXPIQn5s5JxTmv1iZ77KtEoslOO49RV88wP4maBi8Q4bYcWI85r/qklG7APcf2pbrNImpXv3HO3bndoDhfRmddY6Sl6NuP8fKfEoJSAiQlO0L6e1ZJ08bER2bPMeeIKzENRWVuSXEtMIG5S1HoBXpD8nte5w01xZ0JpoFbyeYVKIWpLWc9e+KKQgTnR48LRdoWoLexPtzgciPoC21AY6H7UerdYi5sqO409M2I2OE0+pJ+KdTlRP0g9cUz09WO2im+4tlRLpy4rKFI5hSVdSKPCgQDMnSVoZCsrRsH19hUFwvucFY+hEZxd49We2lOnrXdUGfJlMRHXmFgqaC3AFYPvjP7pRqdSGHFYZVQQctKDi5qePPuqmOWjko2FKgcltQG0j9Afqs1YTyJM0tQBrBi6uCG3o5PLS+hQwUEZCge4rlH2eq2w0pYPCmwamlxtkNxgJcBdSchJSPpxj/dFKM9xjZaoTJmm+H2moki4RYqUojxmEbuWBgEJ7DFMaU5MAZl77TxMak2MpvCipKknttOafIMRKTIDitp6JA/FWTp8q9aeK7iJrgrTLvTsaOrsxFHLSP1SUqW9mWNqgv6iLKLf5ke5MzOc4t5t1L25RJyQc/6rvGsDe9yc5m975F/qjT9v1Tb0F+HOjtuvBP0EpHUj/H4oa3SZTkI90Op5DgYGONy4DpDKyEnqAoZTS1ayoj/8cRh6Omu/CMqeeQVq6bQMYq9RB7O+s9S/05xEt7N2dku3J6KmO6tlLLMfmFW3oVE7h3ORij6mwREV9oVisEeLXiZkcLLlGvliuDl1tlwkFtyzzY5ShspSCpSF5JGT6e9HtawH4wRGQjuW+ivHbobVBSi7xZdhkE91YcaP5GD/AIqRqSB2JJVfhn//2Q==
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
