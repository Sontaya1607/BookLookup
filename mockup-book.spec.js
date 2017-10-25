function AmazonAuth(authService) {
    this.authService = authService
    
    this.Search = (isbn) => {
        var book = this.authService(isbn)
        return {
            name: book.title,
            cover: book.image,
            isbn: book.isbn
        }
    }
}

const amazonbook = {
    title: 'Jest Book',
    image: 'jest_logo-1.png',
    isbn: '0111111666666'
}

test('AmazonAuthen', () => {
    //Arrange
    const mockAmazonAuthen = jest.fn()
        .mockReturnValue(amazonbook)
    var app = new AmazonAuth(mockAmazonAuthen)

    //Act
    var numberisbn = '0111111666666'
    var result = app.Search(numberisbn)

    //Assert
    expect(mockAmazonAuthen).toHaveBeenCalled()
    expect(mockAmazonAuthen).toHaveBeenCalledWith(numberisbn)
    expect(result.isbn).toHaveLength(13)
    expect(result).toHaveProperty('name')
    expect(result).toHaveProperty('cover')
    expect(result).toHaveProperty('isbn')
    expect(result.name).toEqual(amazonbook.title)
    expect(result.cover).toEqual(amazonbook.image)
    expect(result.isbn).toEqual(amazonbook.isbn)
    
})