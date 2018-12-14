import React, { Component } from 'react'
export default class Blog extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      questions: []
    };
  }

  componentDidMount() {
    fetch('https://portfolio-18e3f.firebaseio.com/questions.json')
      .then((res) => res.json())
      .then((resJSON) => {
        const questions = []
        debugger
        for(const key in resJSON){
          questions.push(resJSON[ key ])
        }
        this.setState({
          questions
        })
      })
  }

  handlePostToAPI() {
    fetch('https://portfolio-18e3f.firebaseio.com/questions.json',
      {
        method: 'PUT',
        body: JSON.stringify(this.state.questions)
      })
  }

  handleSelect(key) {
    //alert(`selected ${key}`);
    this.setState({ key });
  }

  handleEdit(index) {
    const questions = this.state.questions
    questions[ index ].isEditing = true
    this.setState({
      questions
    })
  }

  handleDone(index) {
    const questions = this.state.questions
    questions[ index ].isEditing = false
    this.setState({
      questions
    })
  }

  handleQuestionInput(e, index) {
    const questions = this.state.questions
    questions[ index ].question = e.target.value
    this.setState({
      questions
    })
  }

  handleAnswerInput(e, index) {
    const questions = this.state.questions
    questions[ index ].answer = e.target.value
    this.setState({
      questions
    })
  }

  handleAddQuestion() {
    const questions = this.state.questions
    questions.push({ question: 'your question goes here', answer: 'your answer here', isEditing: true })
    this.setState({
      questions
    })
  }

  render() {
  //   return (
	// <div style={ { marginTop: '3%', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '10%', paddingBottom: '10%', paddingLeft: '5%', paddingRight: '5%', marginLeft: '3%', marginRight: '3%', backgroundColor: 'white', boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.16' } }>
	// 	<span className='normal-text'> Out of Ink, will update soon !</span>
	// </div>
  //   )
    return (
	<div style={ { width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' } }>
		<div style={ { width: '90%' } }>
			{
            this.state.questions.map((eachQuestion, index) => {
              if (eachQuestion.isEditing) {
                return (
	<div style={ { marginTop: '20px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.16' } }>
		<hr />
		<span className='large-text'>Question</span>
		<div>
			<textarea style={ { width: '1000px' } } value={ eachQuestion.question } onChange={ (e) => { this.handleQuestionInput(e, index) } } />
		</div>
		<span className='large-text'>Answer</span>
		<div>
			<textarea style={ { width: '1000px', height: '200px' } } value={ eachQuestion.answer } onChange={ (e) => { this.handleAnswerInput(e, index) } } />
		</div>
		<div>
			<button onClick={ () => { this.handleDone(index) } }>Done</button>
		</div>
		<hr />
	</div>
                )
              }
              return (
	<div style={ { paddingTop: '20px', paddingBottom: '20px', marginTop: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.16' } }>
		<hr />
		<span className='large-text'>Question</span>
		<div>
			{eachQuestion.question}
		</div>
		<span className='large-text'>Answer</span>
		<div>
			{eachQuestion.answer}
		</div>
		<div>
			<button onClick={ () => { this.handleEdit(index) } }>Edit</button>
		</div>
	</div>
              )
            })
          }
			<div style={ { width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' } }>
				<div className='m-t-2'>
					<button onClick={ () => { this.handleAddQuestion() } }>Add another Question</button>
				</div>
				<div className='m-t-2'>
					<button onClick={ () => { this.handlePostToAPI() } }>Post</button>
				</div>
			</div>
		</div>
	</div>
    );
  }
}
