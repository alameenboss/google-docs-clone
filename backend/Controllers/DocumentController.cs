using Google.Docs.Clone.API.Data;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Google.Docs.Clone.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DocumentController : ControllerBase
    {
        private readonly IDocumentRepository _documentRepository;

        public DocumentController(IDocumentRepository documentRepository)
        {
            _documentRepository = documentRepository;
        }

        [HttpGet]
        public async Task<IEnumerable<Document>> GetAll()
        {
            return await _documentRepository.GetAllAsync();
        }

        [HttpGet("{id}")]
        public async Task<Document> GetById(string id)
        {
            return await _documentRepository.GetByIdAsync(id);
        }

        [HttpPost]
        public async Task<bool> Save(Document document)
        {
            return await _documentRepository.SaveAsync(document);
        }

        [HttpPut]
        public async Task<bool> SaveName(Document document)
        {
            return await _documentRepository.SaveNameAsync(document);
        }

        [HttpDelete("{id}")]
        public async Task<bool> Delete(string id)
        {
            return await _documentRepository.DeleteAsync(id);
        }

        [HttpDelete]
        public async Task<bool> DeleteAll()
        {
            return await _documentRepository.DeleteAllAsync();
        }
    }
}