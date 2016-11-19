/**
 * Created by sergii on 18.11.2016.
 */
console.log('Hello World!');

var test = {

    createWrapBlock : function() {
        var wrapBlock = document.createElement('div');
        wrapBlock.className = 'wrap__block';
        document.querySelector('body').appendChild(wrapBlock);
    },

    addTitle : function() {
        var title = document.createElement('h2');
        title.innerHTML = 'Тест по программированию';
        document.querySelector('div').appendChild(title);
    },

    addForm : function() {
        var form = document.createElement('form');
        form.action = '/';
        form.method = 'post';
        document.querySelector('div').appendChild(form);
    },

    addOl : function() {
        var ol = document.createElement('ol');
        document.querySelector('form').appendChild(ol);
    },

    addQuestionLi : function(liBlock, questionNamber) {
        var questionLi = document.createElement('li');
        questionLi.className = liBlock;
        questionLi.innerText = questionNamber;
        document.querySelector('ol').appendChild(questionLi);
    },

    addAnswerLabel : function(listLi, answerNamber, radioName) {
        var AnswerLabel = document.createElement('label');
        var input = document.createElement('input');
        var answer = document.createTextNode(answerNamber);
        input.type = 'radio';
        input.name = radioName;
        AnswerLabel.className = 'label__block';
        AnswerLabel.appendChild(input);
        AnswerLabel.appendChild(answer);
        document.querySelector(listLi).appendChild(AnswerLabel);
    },

    addSubmit : function() {
        var submit = document.createElement('input');
        submit.type = 'submit';
        submit.value = 'Проверить вариант';
        submit.className = 'submit__block';
        document.querySelector('form').appendChild(submit);
    },

    createTest : function() {
        this.createWrapBlock();
        this.addTitle();
        this.addForm();
        this.addOl();
        for(var i = 1; i <= 3; i++) {
            this.addQuestionLi('li__block' + i, 'Вопрос № ' + i);
            for(var j = 1; j <= 3; j++) {
                this.addAnswerLabel('.li__block' + i, 'Вариант ответа № ' + j, 'radio' + i);
            }
        }
        this.addSubmit();
    }
};
test.createTest();

