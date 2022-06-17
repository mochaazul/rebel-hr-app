import useDashboard from './useDashboard';
import { ContentModal, DashoardStyle, FloatingButton, Modal } from './style';
import { Button, Input, Form } from 'components';

const Dashboard = () => {
	const {
		articles,
		limit,
		loadingArticle,
		onChangeLimit,
		onClickPagination,
		modalVisible,
		setModalVisible,
		onChangeInput,
		onOk,
		setPostForm,
		postForm,
		modalType,
		onDeleteArticle
	} = useDashboard();

	const renderPostList = () => {
		if (!articles?.length) return null;

		return articles?.map((article, index) => (
			<div key={ article.id } className='posts'>
				<div>
					<h2>{ article.title }</h2>
				</div>
				<div>
					<span onClick={ () => {
						setModalVisible(modalType.UPDATE);
						setPostForm({ title: article.title, content: article.content, id: article.id });
					} }
					>Edit | </span>
					<span onClick={ () => onDeleteArticle(article.id) }>Delete</span>
				</div>
			</div>
		));
	};

	return (
		<>
			<DashoardStyle>
				<Form>
					<Form.Label>Hello World</Form.Label>
					<Form.TextField placeholder='Input here ....' />
				</Form>
				<h1>PAGINATION</h1>
				<div className='list-container'>
					{ renderPostList() }
					{ loadingArticle && <h1>LOADING...</h1> }
				</div>

				<div style={ { margin: '40px 0' } }>
					<select onChange={ onChangeLimit } value={ limit }>
						{
							Array.from({ length: 10 }, (_, i) => (i + 1) * 10).map((arr) => (
								<option value={ arr } key={ arr }>{ arr }</option>
							))
						}
					</select>
					<Button label='Prev Page' onClick={ () => onClickPagination('prev') } />
					<Button label='Next Page' onClick={ () => onClickPagination('next') } />
				</div>

				<h1>LOAD MORE</h1>
				<div className='list-container'>
				</div>
			</DashoardStyle>
			<FloatingButton>
				<Button label='+' width='100%' onClick={ () => setModalVisible(modalType.ADD) } />
			</FloatingButton>
			<Modal modalVisible={ modalVisible !== modalType.INIT }>
				<ContentModal>
					<Input placeholder='title' name='title' onChange={ onChangeInput } value={ postForm.title } />
					<Input placeholder='content' name='content' onChange={ onChangeInput } value={ postForm.content || '' } />
					<Button label='Ok' onClick={ () => onOk() } />
					<Button label='Cancel' onClick={ () => setModalVisible(modalType.INIT) } />
				</ContentModal>
			</Modal>
		</>
	);
};

export default Dashboard;
