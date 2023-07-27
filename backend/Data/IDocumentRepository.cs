using System.Collections.Generic;
using System.Threading.Tasks;

namespace Google.Docs.Clone.API.Data
{
    public interface IDocumentRepository
    {
        Task<Document> GetByIdAsync(string docId);
        Task<IEnumerable<Document>> GetAllAsync();
        Task<bool> DeleteAsync(string docId);
        Task<bool> DeleteAllAsync();
        Task<bool> SaveAsync(Document model);
        Task<bool> SaveNameAsync(Document model);
    }
}