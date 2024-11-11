export class Pagination {
  constructor({ container, totalPages, onPageChange }) {
    this.container = container;
    this._totalPages = totalPages;
    this._currentPage = 1;
    this.onPageChange = onPageChange;
    this.render();
  }

  get currentPage() {
    return this._currentPage;
  }

  set currentPage(page) {
    if (page < 1 || page > this._totalPages || page === this._currentPage)
      return;
    this._currentPage = page;
    this.onPageChange(page);
    this.render();
  }

  render() {
    this.container.innerHTML = '';
    if (this._totalPages < 1) return;

    const createButtonMarkup = ({
      label,
      page,
      isActive = false,
      isDisabled = false,
      arrowButton = false,
    }) => `
      <button class="${isActive ? 'active ' : ''}${
      arrowButton ? 'arrow-button' : ''
    }" data-page="${page}" ${isDisabled ? 'disabled' : ''}>${label}</button>
    `;

    let paginationHTML = '';

    if (this._totalPages > 3) {
      paginationHTML += createButtonMarkup({
        label: '<<',
        page: 1,
        isDisabled: this._currentPage === 1,
        arrowButton: true,
      });
      paginationHTML += createButtonMarkup({
        label: '<',
        page: this._currentPage - 1,
        isDisabled: this._currentPage === 1,
        arrowButton: true,
      });
    }

    let startPage, endPage;
    if (this._totalPages <= 5) {
      startPage = 1;
      endPage = this._totalPages;
    } else if (this._currentPage <= 3) {
      startPage = 1;
      endPage = 4;
    } else if (this._currentPage >= this._totalPages - 2) {
      startPage = this._totalPages - 3;
      endPage = this._totalPages;
    } else {
      startPage = this._currentPage - 1;
      endPage = this._currentPage + 1;
    }

    if (startPage > 1) {
      paginationHTML += createButtonMarkup({ label: 1, page: 1 });
      if (startPage > 2) paginationHTML += '<span class="ellipsis">...</span>';
    }

    for (let i = startPage; i <= endPage; i++) {
      paginationHTML += createButtonMarkup({
        label: i,
        page: i,
        isActive: i === this._currentPage,
      });
    }

    if (endPage < this._totalPages) {
      if (endPage < this._totalPages - 1)
        paginationHTML += '<span class="ellipsis">...</span>';
      paginationHTML += createButtonMarkup({
        label: this._totalPages,
        page: this._totalPages,
      });
    }

    if (this._totalPages > 3) {
      paginationHTML += createButtonMarkup({
        label: '>',
        page: this._currentPage + 1,
        isDisabled: this._currentPage === this._totalPages,
        arrowButton: true,
      });
      paginationHTML += createButtonMarkup({
        label: '>>',
        page: this._totalPages,
        isDisabled: this._currentPage === this._totalPages,
        arrowButton: true,
      });
    }

    this.container.insertAdjacentHTML('beforeend', paginationHTML);

    this.container.querySelectorAll('button[data-page]').forEach(button => {
      const page = parseInt(button.getAttribute('data-page'), 10);
      button.addEventListener('click', () => (this.currentPage = page));
    });
  }

  setTotalPages(totalPages) {
    if (this._totalPages !== totalPages) {
      this._totalPages = totalPages;
      this.render();
    }
  }
}
