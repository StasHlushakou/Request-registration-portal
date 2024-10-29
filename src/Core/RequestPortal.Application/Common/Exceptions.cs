namespace RequestPortal.Application.Common
{
    public class BaseApplicationException : ApplicationException
    {
        public BaseApplicationException() : base() { }

        public BaseApplicationException(string? message) : base(message) { }
    }

    public class EmailReservedException : BaseApplicationException
    {
        public EmailReservedException() : base() { } 
    }

    public class UnauthorizedException : BaseApplicationException
    {
        public UnauthorizedException() : base() { }
    }

    public class InvalidInputDataException : BaseApplicationException
    {
        public InvalidInputDataException() : base() { }
    }

}
