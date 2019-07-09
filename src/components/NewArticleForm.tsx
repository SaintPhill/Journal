import React from 'react'
import styled from 'styled-components'
import {store} from "../redux/store";
import {add_article} from '../redux/actions';
import {articles} from "../redux/reducers";

const ArticleForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
`;

const StyledInput = styled.input`
    width: 50%;
    margin-bottom: 10px;
`;

const StyledArea = styled.textarea`
    width: 50%;
    height: 70px;
    margin-bottom: 10px;
`;

const StyledButton = styled.button`
    width: 50%;
`;



interface State {
    titleValue: string,
    textValue: string,
    nameValue: string
}

class NewArticleForm extends React.Component<{}, State> {
    state = {
      titleValue: '',
      textValue: '',
      nameValue: ''
    };

    handleTitleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            titleValue: e.target.value
        })
    };
    handleTextChanges = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({
            textValue: e.target.value
        })
    };
    handleNameChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            nameValue: e.target.value
        })
    };

    submit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        let {titleValue, textValue, nameValue} = this.state;
        store.dispatch(add_article(titleValue, textValue, nameValue));
        this.setState({
            titleValue: '',
            textValue: '',
            nameValue: ''
        });
        alert('Ваша статья добавлена')
    };

    render() {
        let {titleValue, textValue, nameValue} = this.state;
        return (
            <ArticleForm onSubmit={this.submit}>
                <StyledInput onChange={this.handleTitleChanges} placeholder={'Введите название статьи'} name={'title'} value={titleValue}/>
                <StyledArea onChange={this.handleTextChanges} placeholder={'Введите текст статьи'} name={'text'} value={textValue}/>
                <StyledInput onChange={this.handleNameChanges} placeholder={'Введите Ваше имя'} name={'author'} value={nameValue}/>
                <StyledButton>Confirm</StyledButton>
            </ArticleForm>
        )
    }
}

export default NewArticleForm