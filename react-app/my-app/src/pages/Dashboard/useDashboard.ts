import { useEffect, useState } from 'react';

import { useLazyGetArticlesQuery, useAddArticleMutation, useUpdateArticleMutation, useDeleteArticleMutation } from 'stores/actions';


enum ModalType {
	INIT,
	ADD,
	UPDATE,
}

type FormType = {
	id?: number | undefined;
	title: string;
	content: string;
};

const initialState: FormType = {
	id: 0,
	title: '',
	content: ''
};

const useDashboard = () => {
	const [getArticles, { data: articles, isLoading }] = useLazyGetArticlesQuery();
	const [addArticle] = useAddArticleMutation();
	const [updateArticle] = useUpdateArticleMutation();
	const [deleteArticle] = useDeleteArticleMutation();

	const [offset, setOffset] = useState(0);
	const [limit, setLimit] = useState(10);
	const [modalVisible, setModalVisible] = useState<ModalType>(ModalType.INIT);
	const [postForm, setPostForm] = useState<FormType>(initialState);

	useEffect(() => {
		getArticles({ page: offset, limit });
	}, []);

	const onChangeLimit = (e?: React.ChangeEvent<HTMLSelectElement>) => e ? setLimit(Number(e.target.value)) : undefined;

	const onClickPagination = (type: string) => {
		if (type === 'next') setOffset(Number(offset) + Number(limit));
		else if (offset > 0) setOffset(Number(offset) - Number(limit));
	};

	const onChangeInput = (e?: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined) => {
		if (e) {
			const { name, value } = e.target;
			setPostForm({
				...postForm,
				[name]: value
			});
		}
	};

	const onOk = () => {
		const variables = {
			title: postForm.title,
			content: postForm.content,
			meta_description: "Interior",
			created_by: "superadmin",
			tags: [1],
			new_tags: [1],
			thumbnail_img: 'gambar-rumah.jpg',
			is_publish: true
		};
		modalVisible === ModalType.ADD ?
			addArticle(variables) :
			updateArticle({ ...variables, id: postForm?.id });
		setPostForm(initialState);
		setModalVisible(ModalType.INIT);
	};

	const onDeleteArticle = (id: number) => {
		deleteArticle({ id });
	};

	return {
		articles,
		limit,
		isLoading,
		onChangeLimit,
		onClickPagination,
		modalVisible,
		setModalVisible,
		onChangeInput,
		onOk,
		setPostForm,
		postForm,
		modalType: ModalType,
		onDeleteArticle
	};
};

export default useDashboard;
