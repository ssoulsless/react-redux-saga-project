import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';

const PostList = ({ syncPosts }) => {
	if (!syncPosts.length) {
		return <h3>Постов пока что не нет</h3>;
	}
	return syncPosts.map((post) => <Post post={post} key={post.id} />);
};

const mapStateToProps = (state) => {
	return {
		syncPosts: state.posts.posts,
	};
};

export default connect(mapStateToProps, null)(PostList);
