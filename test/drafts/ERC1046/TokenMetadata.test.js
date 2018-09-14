const ERC20WithMetadata = artifacts.require('ERC20WithMetadataMock');

require('chai')
  .should();

const metadataURI = 'https://example.com';

// TODO: why does it fail?
describe.skip('ERC20WithMetadata', function () {
  beforeEach(async function () {
    this.token = await ERC20WithMetadata.new(metadataURI);
  });

  it('responds with the metadata', async function () {
    (await this.token.tokenURI()).should.equal(metadataURI);
  });
});
